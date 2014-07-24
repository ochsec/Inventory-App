var fb = new Firebase('https://larrys-snack-stand.firebaseio.com/');

var d = new Date();
var month = d.getMonth() + 1;
var day = d.getDate();
var year = d.getFullYear();
var date = month.toString() + "/" + day.toString() + "/" + year.toString();

var products = [
  {
    name: "Pretzel",
    price: "1.00",
    href: "pretzel",
    img: "https://s3.amazonaws.com/CashHelper/Larry/pretzel.png",
    count: 0,
    prod_num: 0
  }, 
  {
    name: "Coca-Cola",
    price: "1.00",
    href: "#coke",
    img: "https://s3.amazonaws.com/CashHelper/Larry/coca-cola-can_p.png",
    count: 0, 
    prod_num: 1 
  },
  {
    name: "Chips Ahoy",
    price: "1.00",
    href: "#chipsahoy",
    img: "https://s3.amazonaws.com/CashHelper/Larry/chips_ahoy_p.png",
    count: 0,
    prod_num: 2
  },
  {
    name: "Diet Coke",
    price: "1.00",
    href: "#dietcoke",
    img: "https://s3.amazonaws.com/CashHelper/Larry/diet-coke-can_p.png",
    count: 0,
    prod_num: 3
  },
  {
    name: "Fritos Chips",
    price: "1.00",
    href: "#fritos",
    img: "https://s3.amazonaws.com/CashHelper/Larry/Fritos_p.png",
    count: 0,
    prod_num: 4
  },
  {
    name: "Lays Sour Cream and Onion Chips",
    price: "1.00",
    href: "#sourcream",
    img: "https://s3.amazonaws.com/CashHelper/Larry/Lays-Cream-Onion-Chips_p.png",
    count: 0,

    prod_num: 5
  },
  {
    name: "Nutter Butter",
    price: "1.00",
    href: "#nutterbutter",
    img: "https://s3.amazonaws.com/CashHelper/Larry/Nutter_Butter_p.png",
    count: 0,
    prod_num: 6
  },
  {
    name: "Reese's Peanut Butter Cups",
    price: "1.00",
    href: "#reesescups",
    img: "https://s3.amazonaws.com/CashHelper/Larry/amos_p.png",
    count: 0,
    prod_num: 7
  },
  {
    name: "Blue Diamond Almonds",
    price: "1.00",
    href: "#bdalmonds",
    img: "https://s3.amazonaws.com/CashHelper/Larry/bd_almonds_p.png",
    count: 0,
    prod_num: 8
  },
  {
    name: "Cheetos",
    price: "1.00",
    href: "#cheetos",
    img: "https://s3.amazonaws.com/CashHelper/Larry/cheetos_p.png",
    count: 0,
    prod_num: 9
  },
  {
    name: "Nestle Crunch",
    price: "1.00",
    href: "#crunch",
    img: "https://s3.amazonaws.com/CashHelper/Larry/crunch_p.png",
    count: 0,
    prod_num: 10
  },
  {
    name: "Nacho Cheese Doritos",
    price: "1.00",
    href: "#nachodoritos",
    img: "https://s3.amazonaws.com/CashHelper/Larry/doritos_nachocheese_p.png",
    count: 0,
    prod_num: 11
  },
  {
    name: "Golden Oreos",
    price: "1.00",
    href: "#goldenoreos",
    img: "https://s3.amazonaws.com/CashHelper/Larry/golden_oreo_p.png"
  },
  {
  name: "Lance Peanut Butter Crackers",
    price: "1.00",
    href: "#lancepbcrackers",
    img: "https://s3.amazonaws.com/CashHelper/Larry/lance_pb_crackers_p.png"
  },
  {
    name: "Lays Potato Chips",
    price: "1.00",
    href: "#lays",
    img: "https://s3.amazonaws.com/CashHelper/Larry/lays-potato-chips-cl_p.png"
  },
  {
    name: "M & M's",
    price: "1.00",
    href: "#mms",
    img: "https://s3.amazonaws.com/CashHelper/Larry/mms_p.png"
  },
  {
    name: "Oreos",
    price: "1.00",
    href: "#oreos",
    img: "https://s3.amazonaws.com/CashHelper/Larry/oreo_p.png"
  },
  {
    name: "Planters Heart Healthy Mix",
    price: "1.00",
    href: "#planters",
    img: "https://s3.amazonaws.com/CashHelper/Larry/planters_nutrition_heart_healthy_mix_p.png"
  }
];

var panels = [];
var trigger = '';
var current_prod;

for (var i = 0; i < products.length; i++) {
  $('#main-product-list').append(
      '<li class="menu-item" id="' + products[i].prod_num + '" >' +
      '<a href="#panel">' +
      '<img src="' + products[i].img + '">' +
      '<h2>' + products[i].name + '</h2>' +
      '<p>$ ' + products[i].price + '</p>' +
      '</a>' +
      '</li>'
  );
}

$('#plus').click(function(event) {
  event.preventDefault();
  products[current_prod].count++;
  $('#count').val(products[current_prod].count);
});

$('#minus').click(function(event) {
  event.preventDefault();
  if (products[current_prod].count > 0)
    {
      products[current_prod].count--;
    }
  $('#count').val(products[0].count);
});

$('#push-data').click(function() {
  for (var l = 0; l < products.length; l++) {
    fb.push({Date: date,
             Product: products[l].name,
             Sold: products[l].count});
  }
  /*
  fb.push({Date : date,
           "Pretzels" : products[0].count,
           "Coca-Cola" : products[1].count,
           "Chips Ahoy" : products[2].count,
           "Diet Coke" : products[3].count});
           */
});

$('#reset').click(function(event) {
  event.preventDefault();
  for(var i = 0; i < products.length; i++)
    {
      products[i].count = 0;
      $('#count').val(0);
    }
});

$(document).ready(function() {
  $('#main-product-list').lisview("refresh");
});
   
  $('.menu-item').on('click', function(event) {
    var selected = $(this).attr("id");
    current_prod = selected.toString();
    $('#panel h2').text(products[current_prod].name);
    $('#panel img').attr('src', products[current_prod].img);
    $('#count').val(products[current_prod].count);
  });