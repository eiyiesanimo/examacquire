var app = angular.module('myApp', ['ngCookies', 'chieffancypants.loadingBar', 'ngAnimate']);
app.controller('myCtrl', ['$scope', '$http', '$cookies', 'cfpLoadingBar', function ($scope, $http, $cookies, cfpLoadingBar) {
    $scope.date = new Date();
    $scope.message
    $scope.name = "John Doe";
    
    $scope.userinfo =
        {
            AgreementName: "",
            Description: ""
                    
}
    $scope.startdate = "2017-12-22T09:13:49Z";
    $scope.payer = { payment_method: "paypal" }
    $scope.payerinfo = { email: "payer@example.com" }
    $scope.plan = { id: "P-1WJ68935LL406420PUTENA2I" }
    $scope.address = {
        line1: "Hotel Staybridge",
        line2: "Crooke Street",
        city: "San Jose",
        state: "CA",
        postal_code: "95112",
        country_code: "US"}
    $scope.overchantpref = "setup_fee=value=5&currency=GBP";
    $scope.chargemodel = "charged_id=CHM-8373958130821962WUTENA2Q&amount=value=1&currency=GBP";


   

    $scope.myFunction = function () {
        cfpLoadingBar.start();
        try {

            $scope.SaveInfo =
         {
             agreement: JSON.stringify("name=" + $scope.userinfo.AgreementName),
             desc: JSON.stringify("&description=" + $scope.userinfo.Description),
             date: JSON.stringify("&start_date=" + $scope.date),
             payer: JSON.stringify("&payer=" + "payment_method=" + $scope.payer.payment_method + "&email=" + $scope.payerinfo.email),
             plan: JSON.stringify("&plan=" + $scope.plan),
             address: JSON.stringify("&shipping_address=" + "line1=" + $scope.address.line1 + "&line2=" + $scope.address.line2 + "&city=" + scope.address.city
                 + "&state=" + scope.address.state + "&postal_code=" + scope.address.postal_code + "&country_code=" + $scope.address.country_code),
             overchantpref: JSON.stringify("&override_merchant_preferences=" + $scope.overchantpref),
             chargemodel: JSON.stringify("&override_charge_models=" + $scope.chargemodel)
             
         }

            console.log($scope.SaveInfo)

            $http({
                method: "POST",
                contentType: "application/json; charset=utf-8",
                authorization: "Bearer <Access-Token>",
                data: $scope.SaveInfo,
                dataType: "json",
                url: "https://api.sandbox.paypal.com/v1/payments/billing-agreements/"
            }).then(function mySuccess(response) {
                $scope.sent = "Successfully Sent: " + response.data;

            }, function myError(response) {
                $scope.myWelcome = "Error response: " + response.statusText;
            });
        }

        catch (e) {
            $scope.error = "Error response: " + e.message;

        }
        cfpLoadingBar.complete();
        

    }

    $scope.checkinput = function () {

        if ($scope.userinfo.AgreementName == "" || $scope.userinfo.Description == "") {
            $scope.message = "*Please fill up the form before submitting"
            return true
        }

        else {
            $scope.message = ""
            return false
        }

        

    }

    $scope.cancel = function () {
        $scope.userinfo.AgreementName = null;
        $scope.userinfo.Description = null;

    }

}]);