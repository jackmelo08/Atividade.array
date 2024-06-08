var entrada = require("readline-sync");
var desconto_mais_caro
produto = []
for i in Range(5):
    preco = float(input('Digite o preço do produto {}: R$ ' . format(i+1)))
    produto.append(preco)
    
mais_caro = max(produtos)
mais_barato = min(produtos)

diferenca_percentual = ((mais_caro - mais_barato) / mais_barato) * 100

desconto_mais_caro = mais_caro * 0.9
if desconto_mais_caro > mais_barato:
     print("Com um desconto de 10%, o produto mais caro ainda é mais caro que o mais barato.")
else:
     print("Com um desconto de 10%, o produto mais caro não será mais caro que o mais barato.")

     print("A diferença percentual entre o produto mais caro e o mais baratoé {:.2f}%.".format(diferenca_percentual))



