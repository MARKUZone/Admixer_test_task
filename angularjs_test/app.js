
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
		//form.capabilities.$setValidity('required', false);
		//console.log(`${form} ${titl} = ${value}`);
		//(value < 0) ? console.log(`${title} is INvalid`) : console.log(`${title} is VALID`);
		//console.log(this.params[0].Value);
		//console.log(this.params.some(isNegative));
		if ( this.params.some(isNegative) ) {
			//form.title.$setValidity('required', false);
			form.$setValidity('required', false);
		} else {
			form.$setValidity('required', true);
		};
		//console.log(form);
		this.params.forEach( function ( item, i ) {
			let diff = () => {
				if ( item.Value == null ) {
					return item.MaxLength;
				} else {
					item.MaxLength - item.Value.length;
				}
			};
			let htmlItem = document.getElementsByTagName("INPUT")[i];
			//console.log(`${i} - ${diff}`);
			if ( diff < 0 ) {
				htmlItem.classList.remove("ng-valid");
				htmlItem.classList.add("ng-invalid");
			} else if ( diff >= 0 && !(htmlItem.classList.contains("ng-valid")) ) {
				htmlItem.classList.add("ng-valid");
				htmlItem.classList.remove("ng-invalid");
			} else {
				console.log("hmmmmm...");
			};
		});
	};
});


function isNegative(item, i) {
	//console.log(item.MaxLength - item.Value.length);
	//item.Value == null ? true : null;
	//console.log(i);
	if ( item.Value == null ) {
		return true;
	}
	let diff = item.MaxLength - item.Value.length;
	if ( diff < 0 ) {
		let htmlItem = document.getElementsByTagName("INPUT")[i];
		htmlItem.classList.remove("ng-valid");
		htmlItem.classList.add("ng-invalid");
		//console.log(htmlItem);
	}
	return diff < 0;
}


