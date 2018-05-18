
var app = angular.module("ngrepeatApp", []);

app.controller("ngrepeatCtrl", function ($scope) {

    $scope.params = [
        {
            Title: "Title",
            Description: "Type Title Here",
            Value: "",
            MaxLength: 10
        },
        {
            Title: "DisplayName",
            Description: "Type Title Here",
            Value: "",
            MaxLength: 15
        },
        {
            Title: "Category",
            Description: "Type Category Here",
            Value: "",
            MaxLength: 6
        }
    ];

	$scope.validCheck = function(form) {
		if ( this.params.some(isNegative) ) {
			form.$setValidity('required', false);
		} else {
			form.$setValidity('required', true);
		};
		this.params.forEach( function ( item, i ) {
			let diff = function () {
				if ( item.Value == null ) {
					return item.MaxLength;
				} else {
					return item.MaxLength - item.Value.length;
				}
			};
			let htmlItem = document.getElementsByTagName("INPUT")[i];
			if ( diff()===item.MaxLength && !htmlItem.classList.contains("ng-pristine") ) {
				document.getElementsByTagName("SMALL")[i].setAttribute("style", "color: #999");
			} else if ( diff() < 0 && htmlItem.classList.contains("ng-valid") ) {
				htmlItem.classList.remove("ng-valid");
				htmlItem.classList.add("ng-invalid");
				if ( !htmlItem.classList.contains("ng-pristine") ) {
					document.getElementsByTagName("SMALL")[i].setAttribute("style", "color: red");
				};
			} else if ( diff() >= 0 && !htmlItem.classList.contains("ng-valid") ) {
				htmlItem.classList.add("ng-valid");
				htmlItem.classList.remove("ng-invalid");
				document.getElementsByTagName("SMALL")[i].setAttribute("style", "color: #999");
			};
		});
	};

});


function isNegative(item, i) {
	if ( item.Value == null ) {
		return true;
	}
	let diff = item.MaxLength - item.Value.length;
	return diff < 0;
}


