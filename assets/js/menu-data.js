    "use strict";

    const categories = [
      { id: "batatas", name: "Batatas recheadas", icon: "🥔" },
      { id: "grandes", name: "Pastéis grandes (23 cm)", icon: "🥟" },
      { id: "pequenos", name: "Pastéis pequenos (16 cm)", icon: "🥟" },
      { id: "doces", name: "Doces", icon: "🍫" },
      { id: "pratos", name: "Pratos executivos", icon: "🍽️" },
      { id: "porcoes", name: "Porções", icon: "🍟" },
      { id: "sucos", name: "Sucos naturais", icon: "🍹" },
      { id: "alcool", name: "Bebidas alcoólicas", icon: "🍺" }
    ];

    const products = [];

    function addProducts(category, rows) {
      rows.trim().split("\n").forEach((row) => {
        const [name, price, description = "", group = ""] = row.split("|");

        products.push({
          id: products.length,
          category,
          name,
          price: Number(price),
          description,
          group
        });
      });
    }

    addProducts("batatas", `
Potato nº 01|45.99|Strogonoff de carne, champignon e batata palha
Potato nº 02|46.99|Strogonoff de carne, catupiry, milho e batata palha
Potato nº 03|45.99|Strogonoff de carne, cheddar e batata palha
Potato nº 04|43.99|Frango ao molho vermelho, catupiry e batata palha
Potato nº 05|44.99|Frango ao molho vermelho, requeijão, milho e batata palha
Potato nº 06|43.99|Frango ao molho branco, provolone e batata palha
Potato nº 07|52.99|Strogonoff de camarão, catupiry e batata palha
Potato nº 08|41.99|Bacon e requeijão
Potato nº 09|46.99|Catupiry, provolone, gorgonzola e requeijão
Potato nº 10|41.99|Calabresa e catupiry
Potato nº 11|49.99|Carne seca e catupiry
Potato nº 12|41.99|Bolonhesa, queijo parmesão e batata palha
Potato nº 13|41.99|Brócolis e requeijão
Potato nº 14|43.99|Strogonoff de frango, champignon e batata palha
Potato nº 15|46.99|Brócolis, mussarela e bacon
Potato nº 16|43.99|Strogonoff de frango, requeijão e batata palha
Potato nº 17|45.99|Strogonoff de frango, catupiry, milho e batata palha
Potato nº 18|43.99|Frango desfiado e catupiry
Potato nº 19|49.99|Carne louca e catupiry
Potato nº 20|43.99|Palmito e catupiry
Potato nº 21|43.99|Cheddar e bacon
Potato nº 22|46.99|Frango desfiado, requeijão e bacon
Monte sua Big Potato|54.99|Escolha até 3 ingredientes para sua batata recheada
    `);

    addProducts("grandes", `
Apetitoso 1|26.99|Calabresa, presunto e mussarela|Carne e calabresa
Apetitoso 3|27.99|Calabresa e mussarela ou catupiry|Carne e calabresa
Bauru|26.99|Presunto, tomate e mussarela|Carne e calabresa
Carne|23.99|Carne|Carne e calabresa
Casal 20|26.99|Carne e mussarela|Carne e calabresa
Caseiro|26.99|Carne, ovo e azeitona|Carne e calabresa
Caseirinho|28.99|Carne, ovo, azeitona, catupiry e cebola|Carne e calabresa
Delicioso 2|26.99|Carne, calabresa e mussarela|Carne e calabresa
Magnum 3|26.99|Carne, catupiry e bacon|Carne e calabresa
Maluco 1|28.99|Presunto, atum, lombo, ovo, catupiry e bacon|Carne e calabresa
Mama Mia|27.99|Carne, palmito, mussarela e azeitona|Carne e calabresa
Nordestino|30.99|Carne seca, mussarela e cebola|Carne e calabresa
Portuguesa|28.99|Mussarela, presunto, ovo, tomate, cebola e azeitona|Carne e calabresa
Quero Mais 2|27.99|Calabresa, provolone, catupiry e mussarela|Carne e calabresa
Saboroso 1|26.99|Presunto, ovo e mussarela|Carne e calabresa
Costela|30.99|Costela com mussarela|Carne e calabresa
Sensação|30.99|Carne louca com mussarela ou catupiry|Carne e calabresa
Cariri 3|26.99|Mussarela, bacon e brócolis|Palmito e brócolis
Divino 1|26.99|Palmito e catupiry|Palmito e brócolis
Hulk 1|26.99|Provolone, palmito, mussarela e azeitona|Palmito e brócolis
Palmito|23.99|Palmito|Palmito e brócolis
Bem Me Quer 2|26.99|Frango, mussarela e bacon|Frango
Bem Me Quer 3|26.99|Mussarela, frango, champignon e azeitona|Frango
Conquistador 1|26.99|Frango, milho verde e catupiry|Frango
Conquistador 3|28.99|Frango, palmito, catupiry e milho|Frango
Paulista 1|26.99|Frango e catupiry|Frango
Quatro Estações|28.99|Mussarela, catupiry, provolone e frango|Frango
Italianinho|30.99|Camarão, palmito e catupiry|Camarão e atum
Maroto 1|26.99|Atum, mussarela e cebola|Camarão e atum
Maroto 2|28.99|Atum, parmesão, cebola, azeitona, mussarela e catupiry|Camarão e atum
Papa Fina 2|30.99|Camarão e catupiry|Camarão e atum
Papa Fina 4|30.99|Camarão, catupiry, mussarela e champignon|Camarão e atum
Tentador|30.99|Camarão, milho, mussarela e azeitona|Camarão e atum
Napolitano|24.99|Mussarela, tomate e orégano|Queijos
Queijo|23.99|Mussarela|Queijos
Dois Queijos|26.99|Mussarela e catupiry|Queijos
Quatro Queijos|30.99|Mussarela, catupiry, provolone e parmesão|Queijos
Monte seu Big Pastel|34.99|Escolha até 3 ingredientes
    `);

    addProducts("pequenos", `
Apetitoso 3|17.99|Calabresa e mussarela ou catupiry
Bauru|16.99|Presunto, tomate e mussarela
Carne|14.99|Carne
Casal 20|16.99|Carne e mussarela
Caseiro|16.99|Carne, ovo e azeitona
Divino 1|17.99|Palmito e catupiry
Maroto 1|18.99|Atum, mussarela e cebola
Napolitano|16.99|Mussarela, tomate e orégano
Papa Fina 2|20.99|Camarão e catupiry
Nordestino|20.99|Carne seca, mussarela e cebola
Palmito|14.99|Palmito
Paulista 1|17.99|Frango e catupiry
Queijo|14.99|Mussarela
Sensação|20.99|Carne louca com mussarela ou catupiry
    `);

    addProducts("doces", `
Carinhoso|20.99|Doce de leite, chocolate e nozes
Choco|16.99|Chocolate
Gostosão|16.99|Banana caramelada
Gostosinho|16.99|Doce de leite, chocolate e banana
Nutella|20.99|Nutella com morango
Romeu e Julieta|16.99|Goiabada e mussarela
Doce de leite|16.99|Doce de leite
Prestígio|16.99|Chocolate com coco ralado
Ternura|16.99|Doce de leite com coco ralado
Mini churros de doce de leite|18.99|Mini churros|Mini churros
Mini churros de chocolate|18.99|Mini churros|Mini churros
Mini churros de Nutella|21.99|Mini churros|Mini churros
    `);

    addProducts("pratos", `
Prato 01|45.99|Strogonoff de carne, arroz e batata palha ou assada
Prato 02|52.99|Strogonoff de camarão, arroz e batata palha ou assada
Prato 03|39.99|Strogonoff de frango, arroz e batata palha ou assada
Prato 04|45.99|Carne seca, arroz e batata assada ou fritas
Prato 05|45.99|Carne louca, arroz e batata assada ou fritas
Prato 06|39.99|Filé de frango à parmegiana, arroz e batata assada ou fritas
Prato 07|45.99|Bife à parmegiana, arroz e batata assada ou fritas
Panqueca de frango ou carne|31.99|Escolha 2 acompanhamentos: arroz, salada, batata assada ou fritas
Panqueca especial|36.99|Frango com catupiry ou calabresa com catupiry. Escolha 2 acompanhamentos
Nhoque|32.99|Ao sugo, frango ao molho vermelho, frango ao molho branco ou bolonhesa
    `);

    addProducts("porcoes", `
Fritas simples 300 g|18.99|Batatas douradinhas e crocantes
Fritas simples 600 g|28.99|Batatas douradinhas e crocantes
Fritas cheddar e bacon 300 g|25.99|Fritas com cheddar cremoso e bacon
Fritas cheddar e bacon 600 g|35.99|Fritas com cheddar cremoso e bacon
Mandioca frita 300 g|25.99|Mandioca douradinha e crocante
Polenta frita 300 g|18.99|Palitos de polenta crocantes
Calabresa acebolada|38.99|Calabresa suculenta com cebola
Calabresa com fritas|35.99|Calabresa acompanhada de fritas
Frango frito|51.99|Pedaços de frango temperados
Frango frito com fritas|45.99|Frango douradinho e fritas
Porção mista|61.99|Frango, calabresa acebolada e fritas
Contra filé com fritas|69.99|Tiras de contra filé e fritas
Porção Big|99.99|Contra filé, frango, calabresa e fritas
Carne seca com mandioca|64.99|Carne seca e mandioca
Mini salgados 10 unidades|21.99|Coxinha, bolinho de queijo ou quibe
Mini pastéis 6 unidades|21.99|Carne, queijo ou calabresa
Mini pastéis 12 unidades|27.99|Carne, queijo ou calabresa
Mini pastéis especiais 6 unidades|25.99|Camarão, carne seca ou palmito
Mini pastéis especiais 12 unidades|32.99|Camarão, carne seca ou palmito
Mini pastéis frango com catupiry 6 unidades|25.99|Frango com catupiry
Mini pastéis frango com catupiry 12 unidades|32.99|Frango com catupiry
    `);

    addProducts("sucos", `
Suco natural 400 ml|16.99|Abacaxi, morango, acerola, laranja, abacaxi com hortelã ou manga
Suco natural 1 litro|26.99|Abacaxi, morango, acerola, laranja, abacaxi com hortelã ou manga
Suco natural com leite 400 ml|21.99|Escolha o sabor
Suco natural com leite 1 litro|31.99|Escolha o sabor
Laranja com morango 400 ml|18.99|Suco natural
Laranja com morango 1 litro|31.99|Suco natural
Laranja com acerola 400 ml|18.99|Suco natural
Laranja com acerola 1 litro|31.99|Suco natural
Maracujá 400 ml|18.99|Suco natural
Maracujá 1 litro|29.99|Suco natural
Maracujá com leite 400 ml|21.99|Suco natural
Maracujá com leite 1 litro|33.99|Suco natural
Caldo de cana 300 ml|14.99|Caldo de cana
Caldo de cana 500 ml|17.99|Caldo de cana
Caldo de cana 1 litro|26.99|Caldo de cana
    `);

    addProducts("alcool", `
Chopp claro 300 ml|10.99|Copo|Chopps
Chopp claro 500 ml|13.99|Copo|Chopps
Chopp claro 700 ml|17.99|Copo|Chopps
Chopp claro torre 1,5 litro|34.99|Torre|Chopps
Chopp de vinho 300 ml|13.99|Copo|Chopps
Chopp de vinho 500 ml|18.99|Copo|Chopps
Chopp de vinho 700 ml|21.99|Copo|Chopps
Chopp de vinho torre 1,5 litro|46.99|Torre|Chopps
Caipirinha limão Velho Barreiro|19.99|400 ml|Drinks
Caipirinha morango Velho Barreiro|28.99|400 ml|Drinks
Caipirinha maracujá Velho Barreiro|28.99|400 ml|Drinks
Caipirinha kiwi Velho Barreiro|28.99|400 ml|Drinks
Caipirinha limão vodka ou saquê|24.99|400 ml|Drinks
Caipirinha morango vodka ou saquê|28.99|400 ml|Drinks
Caipirinha maracujá vodka ou saquê|28.99|400 ml|Drinks
Caipirinha kiwi vodka ou saquê|28.99|400 ml|Drinks
Whisky com energético e água de coco|44.99|700 ml|Drinks
Gin de melancia com energético|29.99|Gelo saborizado, 700 ml|Drinks
Gin de maçã verde com energético|29.99|Gelo saborizado, 700 ml|Drinks
Dose de whisky Red Label|30|Dose|Doses
Dose de gin|12.99|Dose|Doses
Dose de cachaça Seleta|14.99|Dose|Doses
Batida de vinho|25.99|Abacaxi e leite condensado, 500 ml|Batidas
    `);


    // Imagens disponíveis para a visualização detalhada, por categoria e nome.
    const productImages = {
      batatas: {
        "Potato nº 01": "images/batatas/batata numero 1.png",
        "Potato nº 05": "images/batatas/batata numero 5.png",
        "Potato nº 11": "images/batatas/batata numero 11.png"
      },
      grandes: {
        "Casal 20": "images/pasteis/pastel de carne e mussarela.png"
      },
      pequenos: {
        "Casal 20": "images/pasteis/pastel de carne e mussarela.png"
      }
    };