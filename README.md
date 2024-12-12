
# API Node + Helm

Esse projeto consiste em subir uma pequena aplicação em Node com Docker + Helm para o minikube (cluester kubernetes local).

## Referência

 - [Helm Node Template](https://github.com/tmforum-rand/nodejs-helm-chart-example)
 - [Node Versions](https://hub.docker.com/_/node)
 - [Express](https://expressjs.com/pt-br/guide/routing.html)


## Rodando localmente

Redirecione os comandos docker para o minikube

```bash
  eval $(minikube docker-env)
```
    
Crie o namespace nodehelm no k8s

```bash
  kubectl create namespace nodehelm
```

Builde a imagem docker

```bash
docker build -t nathan/node-helm .
```

Verifique o template Helm

```bash
cd chart
helm template --debug -f values.yml -n nodehelm node-helm .
```

Suba o pod com Helm

```bash
helm upgrade --install -f values.yml -n nodehelm node-helm .
```

Redirecione a porta 3333
```bash
 kubectl port-forward --address localhost,0.0.0.0 service/node-helm -n nodehelm 3333:3333 &
 ```