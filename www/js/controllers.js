angular.module('starter.controllers', [])


.controller('ProdutoController', function($scope, $ionicModal) {
  $scope.produtos = [
    { titulo: 'Livro de IONIC', valor: 50.99, publicar:true },
    { titulo: 'Livro de Angular JS', valor: 45.99, publicar:true },
    { titulo: 'Livro de ASP.NET MVC', valor: 30.99, publicar:true },
    { titulo: 'Livro de Java', valor: 32.99, publicar:true },
    { titulo: 'Livro de Android', valor: 50.99, publicar:true },
    { titulo: 'Livro de SQL', valor: 20.00, publicar:true }
  ];

  $ionicModal.fromTemplateUrl('templates/adicionar.html', {
  	scope: $scope
  }).then(function(modal){
  	$scope.modal = modal;
  });

  $scope.abreAdicionar = function()
  {
  	$scope.editando = false;
  	$scope.Produto.titulo = "";
  	$scope.Produto.valor = "";
  	$scope.Produto.publicar = false;
  	$scope.modal.show();
  }

  $scope.addProduto = function(Produto)
  {
  	$scope.produtos.push({
  		titulo: Produto.titulo, valor: Produto.valor, publicar:Produto.publicar
  	});
  	Produto.titulo = "";
  	Produto.valor = "";
  	Produto.publicar = false;
  	$scope.modal.hide();
  };

  $scope.Produto = {};

  $scope.editando = false;

  var auxProdutoEditar;

  $scope.editarProduto = function(ProdutoEditar)
  {
  	$scope.editando = true;
  	$scope.Produto.titulo = ProdutoEditar.titulo;
  	$scope.Produto.valor = ProdutoEditar.valor;
  	$scope.Produto.publicar = ProdutoEditar.publicar;
  	auxProdutoEditar = ProdutoEditar;
  	$scope.modal.show();
  };

  $scope.salvarProduto = function(Produto)
  {
  	auxProdutoEditar.titulo = Produto.titulo;
  	auxProdutoEditar.valor = Produto.valor;
  	auxProdutoEditar.publicar = Produto.publicar;
  	$scope.modal.hide();
  };


})
	
