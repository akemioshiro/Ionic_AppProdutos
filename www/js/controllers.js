angular.module('starter.controllers', [])


.controller('ProdutoController', function($scope) {
  $scope.produtos = [
    { titulo: 'Livro de IONIC', valor: 50.99, publicar:true },
    { titulo: 'Livro de Angular JS', valor: 45.99, publicar:true },
    { titulo: 'Livro de ASP.NET MVC', valor: 30.99, publicar:true },
    { titulo: 'Livro de Java', valor: 32.99, publicar:true },
    { titulo: 'Livro de Android', valor: 50.99, publicar:true },
    { titulo: 'Livro de SQL', valor: 20.00, publicar:true }
  ];
})

