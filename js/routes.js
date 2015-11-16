// Variables Globales
var left = $('.content_home .content_house .cloud').css('left');

// Cargo la variable de mi aplicación con sus dependencias
var app = angular.module('zopp', ['ngRoute']);

// Configuración de las rutas
app.config(function($routeProvider, $locationProvider) {
    
    $routeProvider

    // Ruta del home
    .when('/', {
        templateUrl : 'templates/home.html',
         controller  : 'mainController'
    })
    
    // Ruta de casos de éxito
    .when('/casos-exito', {
        templateUrl : 'templates/case.html',
         controller  : 'caseController'
    })
    
    // Ruta de lo que hacemos
    .when('/lo-que-hacemos', {
        templateUrl : 'templates/wemake.html',
         controller  : 'wemakeController'
    })
    
    // Ruta de lo que hacemos con parametro
    .when('/lo-que-hacemos/:product', {
        templateUrl : 'templates/product.html',
         controller  : 'productController'
    })
    
    // Ruta de nosotros
    .when('/nosotros', {
        templateUrl : 'templates/we.html',
         controller  : 'weController'
    })
    
    // Ruta de contacto
    .when('/contacto', {
        templateUrl : 'templates/contact.html',
         controller  : 'contactController'
    })
    
    // Ruta de cotizador
    .when('/cotizador', {
        templateUrl : 'templates/cotizador.html',
         controller  : 'cotizadorController'
    })
    
    .otherwise({
        redirectTo: '/'
    });
    
    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix('!');
});

// Controlador del inicio
app.controller('mainController', ['$scope','$http','$rootScope', function($scope,$http,$rootScope) {
    load_page();
    search();
    $('.navigator a').removeClass('active').parent().removeClass('active');
    links_navigator();
    menu_toggle();
    current_hour_of_day();
    change_panel();
    support();
}]);

// Controlador de casos de exito
app.controller('caseController', ['$scope','$http','$rootScope', function($scope,$http,$rootScope) {
    load_page();
    search();
    links_navigator();
    menu_toggle();
    current_hour_of_day();
    
    // $('body').css('background-image','url(../img/pixel_superior.png), url(../img/pixel_cover.png)');
    
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop:true,
        nav:true,
        center: true,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 300,
        items: 4,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },            
            960:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });
    
    change_panel();
    
    support();
    
    $('.item_corusel').unbind('click').click(function(){
        
    });
    
}]);

// Controlador de lo que hacemos
app.controller('wemakeController', ['$scope','$http','$rootScope', function($scope,$http,$rootScope) {
    load_page();
    search();
    links_navigator();
    menu_toggle();
    current_hour_of_day();
    change_panel();
    support();
    event_widgets();
}]);

// Controlador de nosotros
app.controller('weController', ['$scope','$http','$rootScope', function($scope,$http,$rootScope) {
    load_page();
    search();
    links_navigator();
    menu_toggle();
    current_hour_of_day();
    change_panel();
    support();
}]);

// Controlador del producto lo que hacemos
app.controller('productController', function($scope, $routeParams) {
    var product = $routeParams.product;
    $scope.message = $routeParams.product;
    
    if(product == 'desarrollo-de-software')
        $scope.data = _products[0];
    else if(product == 'diseno-de-sitios-web')
        $scope.data = _products[1];
    else if(product == 'adminstracion-de-redes-sociales')
        $scope.data = _products[2];
    else if(product == 'implementacion-de-crm')
        $scope.data = _products[3];
    else if(product == 'envio-de-correos-masivos')
        $scope.data = _products[4];
    else if(product == 'envio-de-mensajes-de-texto')
        $scope.data = _products[5];
    else if(product == 'diseno-de-marcas-y-contruccion-de-interfaces-para-aplicaciones-web')
        $scope.data = _products[6];
    else if(product == 'desarrollo-de-estrategias-publicitarias')
        $scope.data = _products[7];
    else if(product == 'tiendas-en-linea')
        $scope.data = _products[8];
    else if(product == 'desarrollo-de-aplicaciones-moviles-apps')
        $scope.data = _products[9];
    else if(product == 'pauta-en-internet')
        $scope.data = _products[10];
    else if(product == 'poliza-de-medios-digitales')
        $scope.data = _products[11];
    else
        window.location = "#!/404.html"
    
    load_page();
    search();
    links_navigator();
    menu_toggle();
    current_hour_of_day();
    change_panel();
    support();
    
    setTimeout(function(){
        $('ul.tabs').tabs();
        
        var owl = $('.owl-carousel');
        owl.owlCarousel({
            loop:true,
            nav:true,
            center: true,
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 300,
            items: 1,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },            
                960:{
                    items:1
                },
                1200:{
                    items:1
                }
            }
        });
    },500);
});

// Controlador contacto
app.controller('contactController', ['$scope','$http','$rootScope', function($scope,$http,$rootScope) {
    load_page();
    search();
    links_navigator();
    menu_toggle();
    current_hour_of_day();
    change_panel();
    support();
}]);

// Controlador cotizador
app.controller('cotizadorController', ['$scope','$http','$rootScope', function($scope,$http,$rootScope) {
    load_page();
    search();
    links_navigator();
    menu_toggle();
    current_hour_of_day();
    change_panel();
    support();
    
    $('ul.tabs').tabs();
    $('select').material_select();
    
    $('.content_plan a').unbind('click').click(function(e){
        e.preventDefault();
        
        var type = $(this).attr('type');
        
        if(type == 1)
            $('#modal_tipe_'+type).openModal();
        else if(type == 2)
            $('#modal_tipe_'+type).openModal();
        
    });
    
    // Evento que cierra el popup de añadir al carrito
    $('.container_btn_car .add_car').unbind('click').click(function(){
        $('#modal_tipe_1, #modal_tipe_1').closeModal();
    });
}]);

// Controlador car
app.controller('carController', ['$scope','$http','$rootScope', function($scope,$http,$rootScope) {
    
    setTimeout(function() {
        $('.container_car .close').unbind('click').click(function(){
            $('.content_car').removeClass('open');
        });
        
        $('.container_car .item .close').unbind('click').click(function(e){
            e.preventDefault();
            var parent = $(this).parent();
            parent.slideUp(1000);
            setTimeout(function(){
                parent.remove();
            },1000)
        });
        
        $('.container_btn_car .shop').unbind('click').click(function(){
            $('.form_buy').slideToggle(500);
        });
    }, 1000);
}]);

/* Función que me muestra en pantalla un mensaje
* Parematros: @message, @time
* @message: mensaje que me va a mostrar en la pantalla
* @time: tiempo que se va amostrar el mensaje
*/

function message(message, time){
    
    // Si no especifican el tiempo
    if(time == null)
        Materialize.toast(message, 2000);
    else
        Materialize.toast(message, time);
}

/*
* Función que carga el inicio de la pagina
*/

function load_page(){
    var loader = $(".loader");
    var porcentage = $(".porcentage");
    var num = 0;
    
    if(localStorage.getItem('load') != null ){
        setTimeout(function(){
            $(".door").removeClass('close').addClass('open');
        },500);
        setTimeout(function(){
            $(".door").hide(10);
            animations();
        },900);
    }else{
        if(localStorage.getItem('first_load') != null){
            var count = setInterval(function(){
                num++;
                loader.css("height", num + "%");
                porcentage.find('span').text(num);
                
                if(num == 100){
                    clearInterval(count);
                    setTimeout(function(){
                        $(".door").removeClass('close').addClass('open');
                        porcentage.fadeOut(100);
                        loader.fadeOut(100);
                    },500);
                    setTimeout(function(){
                        animations();
                    },1300);
                    setTimeout(function(){
                        $(".door").hide(10);
                    },1500);
                    setTimeout(function(){
                        $('.panel_left').addClass('ready');
                    },1600);
                }
            },10);
        }else{
        
            var count = setInterval(function(){
                num++;
                loader.css("height", num + "%");
                porcentage.find('span').text(num);
                
                if(num == 100){
                    localStorage.setItem('first_load', true);
                    clearInterval(count);
                    setTimeout(function(){
                        $(".door").removeClass('close').addClass('open');
                        porcentage.fadeOut(100);
                        loader.fadeOut(100);
                    },500);
                    setTimeout(function(){
                        animations();
                    },1300);
                    setTimeout(function(){
                        $(".door").hide(10);
                    },1500);
                    setTimeout(function(){
                        $('.panel_left').addClass('ready');
                    },1600);
                }
            },100);
        }
    }
    
    var url = window.location.hash;
    
    if(url == "#!/casos-exito")
        $('body').removeClass('we').addClass('case_page');
    else if(url == "#!/nosotros")
        $('body').removeClass('case_page').addClass('we');
    else
        $('body').removeClass('case_page we');
    
    
    // background-position: top center, 80% 85%; // nosotros
    // background-position: top center, 80% 63rem; // casos
    // background-position: top center, 80% 85%;
}

// Evento de la busqueda
function search(){
    $('.icon').unbind('click').click(function(){
        var value = $('#search').val();
        
        if(value == ""){
            message("¡Ingrese algo para buscar!");
            $('#search').focus();
        }else{
            message("Estamos en Construcción...");
            $('#search').val("");
        }
    });
    
    $('#search').unbind().focusin(function(){
        $(this).parent().css('border-color','#00B3E4').find('.icon').addClass('active');
    }).blur(function(){
        $(this).parent().css('border-color','#4C4F56').find('.icon').removeClass('active');
    });
}

// Evento de los clicks de los menus
function links_navigator(){
    $('.navigator a').removeClass('active').parent().removeClass('active');
    delete_animations();
    
    $('.navigator a').unbind('click').click(function(e){
        e.preventDefault();
        
        var navigator = document.querySelector('.navigator');
        
        if(navigator.className == "navigator open"){
            $('.navigator').toggleClass('open'); 
            $(".content_button_navigator").toggleClass('active');
        }
        
        var url = $(this).attr('href');
        $(this).addClass('active').parent().addClass('active');
        
        setTimeout(function(){
            // Valido si esta dando click en la misma url
            if(url == window.location.hash){
                return;
            }else{
                if(url == "#!/contacto"){
                    $('html, body').animate({
                       scrollTop: jQuery('.footer').position().top
                    }, 3000);
                    $('.container_btn_support').removeClass('animated tada');
                }else{
                    $('.door').css('display','block');
                    setTimeout(function(){ 
                        localStorage.setItem('load', 'true');
                        $('.door').removeClass('open').addClass('close');
                    }, 200);
                    setTimeout(function(){
                        window.location = url; 
                    }, 1000);
                }
            }
        },500)
    });
    
    // Click en el link del logo
    $('.logo a').unbind('click').click(function(e){
        e.preventDefault();
        
        var url = $(this).attr('href');
        
        if(url == window.location.hash){
            return;
        }else{
            $('.door').css('display','block');
            setTimeout(function(){ 
                localStorage.setItem('load', 'true');
                $('.door').removeClass('open').addClass('close');
            }, 200);
            setTimeout(function(){
                window.location = url; 
            }, 1000);
        }
    });
}

// Evento para el botón navegacion en móvil}
function menu_toggle(){
    $('.content_button_navigator span').unbind('click').click(function(){
    // debugger
        // añado la clase al boton del menu
        $(".content_button_navigator").toggleClass('active');
        
        // añado la clase que me permite ver el menu en mobiles
        $('.navigator').toggleClass('open'); 
        $('.navigator').find('a').removeClass("animated fadeInUp");
        
        setTimeout(function(){
            $('.navigator').find('a').toggleClass("animated fadeInUp");
        }, 300);
    });
}

// Function que me calcula la hora actual del dia
function current_hour_of_day(){
    var $date = new Date();
    
    var current_hour = $date.getHours();
    
    if(current_hour >= 6 && current_hour < 12){
        // console.log("morning!");
        $('.cloud.morning:not(.last)').attr( "src","img/nube_morning2.png" );
        $('.cloud.morning.last').attr( "src","img/nube_morning1.png" );
        $('.cloud.morning_back').attr( "src","img/morning.png" );
        $('.moon,.star').hide();
    }else if(current_hour >= 12 && current_hour < 18){
        // console.log("afternoon!");
        $('.cloud.morning_back').attr( "src","img/afternoon.png" );
        $('.cloud.morning:not(.last)').attr( "src","img/nube_afternoon2.png" );
        $('.cloud.morning.last').attr( "src","img/nube_afternoon1.png" );
        $('.moon,.star').hide();
    }else{
        // console.log("nigth!");
        $('body').addClass('night');
        $('.logo img').attr('src','img/logo_white.png');
        $('.cloud,.bird').hide();
    } 
}

// Funcion que me calcula el panel de la izquierda entre a el footer
function change_panel(){
    var lastScrollTop = 0;
    
    $(document).unbind('scroll').scroll(function(e){
        var top = document.querySelector('.footer').offsetTop;
        
        var attrs = document.body.getBoundingClientRect();
        
        if(window.scrollY > (top - ((attrs.height / 2) / 2 - 25))){
            $('.panel_left').addClass('changed');
        }else{
            $('.panel_left').removeClass('changed');
        }
        
        var st = $(this).scrollTop();
        if (st > lastScrollTop){
           // downscroll code
            console.log('down');
        } else {
            console.log('up');
          // upscroll code
        }
        lastScrollTop = st;
        
    });
}

// funcion de las animaciones home
function animations(){
    $('.step:nth-child(odd)').viewportChecker({
        classToAdd: 'animated fadeInRight',
        offset: 100
    });
    
    $('.step:nth-child(even)').viewportChecker({
        classToAdd: 'animated fadeInLeft',
        offset: 100
    });
    
    $('.container_btn_support').viewportChecker({
        classToAdd: 'animated tada',
        offset: 100
    });
    
    $('.content_widgets,.row.we,.content_cases,img[src*="case"],img[src*="quehacem"],img[src*="nosot"],.owl-carousel, .widget,.content_home.product').viewportChecker({
        classToAdd: 'animated fadeInUp',
        offset: 100
    });
}

// Funcion para borrar las animaciones
function delete_animations(){
    $('.step:nth-child(odd)').removeClass('animated fadeInRight');
    
    $('.step:nth-child(even)').removeClass('animated fadeInLeft');
    
    $('.container_btn_support').removeClass('animated tada');
    
    $('img[src*="case"],img[src*="quehacem"],img[src*="nosot"],.owl-carousel,.row.we,.content_cases,.content_widgets,.widget,.content_home.product').removeClass('fadeInUp');
}

// Funcion del evento soporte
function support(){
    $('.container_btn_support').unbind('click').click(function(){
        $('#zenbox_tab').click();
    });
    
    $('.panel_left .icon').eq(0).unbind('click').click(function(e){
        e.preventDefault();
        $('.content_car').toggleClass("open");
    });
    
    $('.panel_left .icon').eq(1).unbind('click').click(function(){
        $('#zenbox_tab').click();
    });
    
    $('.panel_left .icon').eq(2).unbind('click').click(function(e){
        e.preventDefault();
        
        var url = "#!/cotizador";
        
        if(url == window.location.hash){
            return;
        }else{
            $('.door').css('display','block');
            setTimeout(function(){ 
                localStorage.setItem('load', 'true');
                $('.door').removeClass('open').addClass('close');
            }, 200);
            setTimeout(function(){
                window.location = "#!/cotizador";
            }, 1000);
        }
    });
}

// Evento para los widgets de que hacemos
function event_widgets(){
    $('.widget').unbind('click').click(function(){
        var url = $(this).attr('url');
        
        $('.door').css('display','block');
        setTimeout(function(){ 
            localStorage.setItem('load', 'true');
            $('.door').removeClass('open').addClass('close');
        }, 200);
        setTimeout(function(){
            window.location = url; 
        }, 1000);
    });
}