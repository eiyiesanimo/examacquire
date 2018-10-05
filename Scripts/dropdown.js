$('#input-tags').selectize({
    persist: false,

    createOnBlur: true,
    create: true
});

$('#select-beast').selectize({
    create: true,
    sortField: {
        field: 'text',
        direction: 'asc'
    },
    dropdownParent: 'body'
});


//$('#brand').selectize({
//    persist: false,
//    maxItems: null,
//    valueField: 'email',
//    labelField: 'name',
//    searchField: ['name', 'email'],
//    options: [
//        { email: 'brian@thirdroute.com', name: 'Brian Reavis' },
//        { email: 'nikola@tesla.com', name: 'Nikola Tesla' },
//        { email: 'someone@gmail.com', name: 'Nikola Tesla' }
//    ]
//});

$('#brand').selectize({
    persist: false,
    maxItems: null,
    valueField: 'brand',
    labelField: 'brand',
    delimiter: ',',
    createOnBlur: true,
    create: true
    //onOptionAdd: function (value, data) {
    //    value = value.replace(/\s/g, ',')
    //    console.log(value)
    //},

   
});
$('#OtherRegistrantName').selectize({
    persist: false,
    maxItems: null,
    valueField: 'OtherRegistrantName',
    labelField: 'OtherRegistrantName',
    delimiter: ',',
    createOnBlur: true,
    create: true
    //onOptionAdd: function (value, data) {
    //    value = value.replace(/\s/g, ',')
    //    console.log(value)
    //},


});


//var REGEX_EMAIL = '/^(?!:\/\/)([a-zA-Z0-9]+\.)?[a-zA-Z0-9][a-zA-Z0-9-]+\.[a-zA-Z]{2,6}?$/i';

$('#domains').selectize({
    persist: false,
    maxItems: null,
    valueField: 'domain',
    labelField: 'domain',
    delimiter:' ',
    //onOptionAdd: function (value, data) {
    //    value = value.replace(/\s/g, ',')
    //    console.log(value)
    //},
  
       create: function(input) {
        //if ((new RegExp(REGEX_EMAIL, 'i')).test(input)) {
        //    return {email: input};
           //}
           
           
           //var test = input.replace(/\s/g, ',')
           //console.log(input)
        
           var match = input.match(/^(?!:\/\/)([a-zA-Z0-9-]+\.)?[a-zA-Z0-9][a-zA-Z0-9-]+\.[a-zA-Z]{2,63}?$/i);
        if (match) {
           
                return {domain: input};
         
        }
         
        return false;
    }
});

$('.dd').selectize({
    persist: false,
    maxItems: null,
    valueField: 'domain',
    labelField: 'domain',
    delimiter: ' ',
    //onOptionAdd: function (value, data) {
    //    value = value.replace(/\s/g, ',')
    //    console.log(value)
    //},

    create: function (input) {
        //if ((new RegExp(REGEX_EMAIL, 'i')).test(input)) {
        //    return {email: input};
        //}


        //var test = input.replace(/\s/g, ',')
        //console.log(input)

        var match = input.match(/^(?!:\/\/)([a-zA-Z0-9]+\.)?[a-zA-Z0-9][a-zA-Z0-9-]+\.[a-zA-Z]{2,6}?$/i);
        if (match) {

            return { domain: input };

        }

        return false;
    }
});


