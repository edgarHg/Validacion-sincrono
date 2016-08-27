angular.module('App', ['ngAnimate'])
	.controller("ctrValidaciones",['$scope', function($scope){
		$scope.objMensajes = {
			nombre: false,
			apellidoPat: false
		};
		
		$scope.mdlUsuario = {
			nombre: "",
			apellidoPat: ""
		};

		$scope.BtnGuardarUsuario = function(){
			if($scope.mdlUsuario.nombre === ""){
				$scope.objMensajes.nombre = true;
			}else if($scope.mdlUsuario.apellidoPat === ""){
				$scope.objMensajes.apellidoPat = true;
			}else{
				GuardarUsuario();
			}
		};

		$scope.CerrarMensajes = function(estatus, input){
			if(estatus){
				$scope.objMensajes[input] = false;
			}
		};

		function GuardarUsuario(){
			console.log("Enviando al Servicio para Guardar...");
		}
	}])
