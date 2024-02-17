const fatosHistoricos = [
    { "ano": 1900, "fato": "Assinatura do Tratado de Paris, encerrando a Guerra Hispano-Americana." },
    { "ano": 1901, "fato": "Assassinato do presidente dos EUA, William McKinley; Theodore Roosevelt torna-se presidente." },
    { "ano": 1902, "fato": "Erupção do vulcão Mont Pelée em Martinica, matando cerca de 30.000 pessoas." },
    { "ano": 1903, "fato": "Primeiro voo motorizado pelos irmãos Wright." },
    { "ano": 1904, "fato": "Início da construção do Canal do Panamá." },
    { "ano": 1905, "fato": "Albert Einstein publica sua Teoria da Relatividade Especial." },
    { "ano": 1906, "fato": "Estreia do filme 'O Grande Roubo do Trem' de Edwin S. Porter, considerado um marco no cinema." },
    { "ano": 1907, "fato": "Conferência de Paz de Haia." },
    { "ano": 1908, "fato": "Oswald Spengler publica 'A Decadência do Ocidente'." },
    { "ano": 1909, "fato": "Robert Peary e Matthew Henson alcançam o Polo Norte." },
    { "ano": 1910, "fato": "Revolução Mexicana, que levou à queda do presidente Porfirio Díaz." },
    { "ano": 1911, "fato": "Revolução Chinesa que levou à queda da Dinastia Qing e à proclamação da República da China." },
    { "ano": 1912, "fato": "Naufrágio do Titanic." },
    { "ano": 1913, "fato": "Promulgação do Décimo Sétimo Amendamento da Constituição dos Estados Unidos, instituindo a eleição direta de senadores." },
    { "ano": 1914, "fato": "Assassinato do Arquiduque Francisco Ferdinando da Áustria, desencadeando a Primeira Guerra Mundial." },
    { "ano": 1915, "fato": "Albert Einstein publica sua teoria da relatividade geral." },
    { "ano": 1916, "fato": "Margaret Sanger abre a primeira clínica de controle de natalidade nos Estados Unidos." },
    { "ano": 1917, "fato": "Os EUA entram na Primeira Guerra Mundial." },
    { "ano": 1918, "fato": "Tratado de Versalhes é assinado, encerrando formalmente a Primeira Guerra Mundial." },
    { "ano": 1919, "fato": "Fundação da Liga das Nações." },
    { "ano": 1920, "fato": "Fundação da Liga dos Direitos Civis." },
    { "ano": 1921, "fato": "Assassinato de membros proeminentes do governo russo pelos bolcheviques, incluindo o czar Nicolau II e sua família." },
    { "ano": 1922, "fato": "Benito Mussolini assume o poder na Itália, estabelecendo o regime fascista." },
    { "ano": 1923, "fato": "Terremoto de Kantō no Japão, devastando Tóquio e Yokohama." },
    { "ano": 1924, "fato": "A morte de Vladimir Lenin." },
    { "ano": 1925, "fato": "Fundação da National Geographic Society." },
    { "ano": 1926, "fato": "A criação da Televisão em Londres por John Logie Baird." },
    { "ano": 1927, "fato": "Charles Lindbergh realiza o primeiro voo solo transatlântico sem escalas." },
    { "ano": 1928, "fato": "Descoberta da penicilina por Alexander Fleming." },
    { "ano": 1929, "fato": "A quebra da Bolsa de Valores de Nova York, marcando o início da Grande Depressão." },
    { "ano": 1930, "fato": "Fundação do Banco Internacional de Reconstrução e Desenvolvimento (Banco Mundial)." },
    { "ano": 1931, "fato": "Início da Guerra Civil Espanhola." },
    { "ano": 1932, "fato": "Adolf Hitler torna-se Chanceler da Alemanha." },
    { "ano": 1933, "fato": "Franklin D. Roosevelt inicia o New Deal nos Estados Unidos." },
    { "ano": 1934, "fato": "Noite das Facas Longas na Alemanha, onde Hitler elimina rivais dentro do partido nazista." },
    { "ano": 1935, "fato": "Leis de Nuremberg na Alemanha, que discriminam os judeus." },
    { "ano": 1936, "fato": "Ascensão de Adolf Hitler e do Partido Nazista na Alemanha." },
    { "ano": 1937, "fato": "Fundação da Walt Disney Productions, mais tarde conhecida como The Walt Disney Company." },
    { "ano": 1938, "fato": "Anschluss: A anexação da Áustria à Alemanha nazista." },
    { "ano": 1939, "fato": "Invasão da Polônia: A Alemanha nazista invadiu a Polônia em 1º de setembro de 1939, desencadeando o início da Segunda Guerra Mundial." },
    { "ano": 1940, "fato": "Queda da França: A França se rendeu à Alemanha nazista em 22 de junho de 1940, após uma rápida invasão alemã." },
    { "ano": 1941, "fato": "Ataque a Pearl Harbor: Em 7 de dezembro de 1941, as forças japonesas atacaram a base naval de Pearl Harbor, no Havaí, levando os Estados Unidos a entrarem na Segunda Guerra Mundial." },
    { "ano": 1942, "fato": "Batalha de Stalingrado: A luta épica entre as forças soviéticas e alemãs em Stalingrado resultou em uma vitória crucial para os soviéticos e marcou um ponto de virada na Segunda Guerra Mundial." },
    { "ano": 1943, "fato": "Conferência de Teerã: Líderes aliados se reuniram para discutir estratégias para derrotar as Potências do Eixo." },
    { "ano": 1944, "fato": "Desembarques da Normandia (Dia D): Em 6 de junho de 1944, as forças aliadas lançaram uma invasão na Normandia, França, marcando o início da libertação da Europa ocupada pelos nazistas." },
    { "ano": 1945, "fato": "Bombardeios de Hiroshima e Nagasaki: Os Estados Unidos lançaram bombas atômicas sobre as cidades japonesas de Hiroshima e Nagasaki." },
    { "ano": 1946, "fato": "Fundação da Organização das Nações Unidas (ONU) e Julgamentos de Nuremberg." },
    { "ano": 1947, "fato": "Plano Marshall: Lançamento do Plano Marshall, um programa de auxílio econômico dos EUA para a reconstrução da Europa pós-guerra." },
    { "ano": 1948, "fato": "Declaração Universal dos Direitos Humanos: A Assembleia Geral das Nações Unidas adota a Declaração Universal dos Direitos Humanos." },
    { "ano": 1949, "fato": "Fundação da OTAN" },
    { "ano": 1950, "fato": "Estabelecimento do Pacto de Varsóvia: Uma aliança militar entre os países do Bloco do Leste liderados pela União Soviética." },
    { "ano": 1951, "fato": "Primeira transmissão de televisão em cores nos Estados Unidos pela rede CBS." },
    { "ano": 1952, "fato": "Teste da primeira bomba de hidrogênio pelos Estados Unidos." },
    { "ano": 1953, "fato": "Coronação da Rainha Elizabeth II do Reino Unido." },
    { "ano": 1954, "fato": "Acordo de Genebra sobre o Vietnã: Dividiu o Vietnã em dois, com o Vietnã do Norte comunista e o Vietnã do Sul pró-ocidental." },
    { "ano": 1955, "fato": "Morte de Albert Einstein: O renomado físico morreu em abril." },
    { "ano": 1956, "fato": "Crise do Canal de Suez: Israel, França e Reino Unido invadiram o Egito em resposta à nacionalização do canal pelo presidente Nasser." },
    { "ano": 1957, "fato": "União Soviética lança o foguete Sputnik 1." },
    { "ano": 1958, "fato": "Independência da Guiné, Gana e Camarões" },
    { "ano": 1959, "fato": "Revolução Cubana: Fidel Castro e seus rebeldes derrubaram o regime de Fulgencio Batista." },
    { "ano": 1960, "fato": "Incidente do U-2: Um avião espião dos EUA foi abatido sobre o território soviético." },
    { "ano": 1961, "fato": "Construção do Muro de Berlim." },
    { "ano": 1962, "fato": "Lançamento do primeiro satélite de comunicações ao vivo - Telstar." },
    { "ano": 1963, "fato": "Assassinato de John F. Kennedy." },
    { "ano": 1964, "fato": "Golpe Militar no Brasil." },
    { "ano": 1965, "fato": "Marcha pelos Direitos Civis em Selma." },
    { "ano": 1966, "fato": "Copa do Mundo de Futebol na Inglaterra." },
    { "ano": 1967, "fato": "Verão do Amor: Em São Francisco, Califórnia, ocorreu o movimento hippie e a contracultura alcançou seu auge." },
    { "ano": 1968, "fato": "Assassinatos de Martin Luther King Jr. e Robert F. Kennedy." },
    { "ano": 1969, "fato": "A Apollo 11 posa na Lua." },
    { "ano": 1970, "fato": "Desastre do voo 571 da Força Aérea Uruguaia" },
    { "ano": 1971, "fato": "Lançamento do microprocessador Intel 4004, marcando o início da revolução da informática." },
    { "ano": 1972, "fato": "A União Soviética lança a estação espacial Salyut 1, marcando o início da era das estações espaciais." },
    { "ano": 1973, "fato": "Movimento punk começa em Nova York e Londres." },
    { "ano": 1974, "fato": "A descoberta do 'Australopithecus afarensis' por Donald Johanson e Tom Gray na Etiópia, mais conhecido como 'Lucy'." },
    { "ano": 1975, "fato": "Lançamento do Atari, um dos primeiros consoles de videogame doméstico." },
    { "ano": 1976, "fato": "A revolução no Líbano leva ao início da Guerra Civil Libanesa, que duraria até 1990." },
    { "ano": 1977, "fato": "O lançamento do filme 'Star Wars' revoluciona a indústria cinematográfica e se torna um fenômeno cultural." },
    { "ano": 1978, "fato": "A eleição de Karol Wojtyła como Papa João Paulo II, o primeiro papa polonês e não-italiano em mais de 450 anos." },
    { "ano": 1979, "fato": "A Revolução Islâmica no Irã derruba o xá Reza Pahlavi e estabelece uma república islâmica liderada pelo aiatolá Khomeini." },
    { "ano": 1980, "fato": "A eleição de Ronald Reagan como presidente dos EUA." },
    { "ano": 1981, "fato": "Lançamento do Ônibus Espacial Columbia, marcando o início da era dos ônibus espaciais." },
    { "ano": 1982, "fato": "Guerra das Malvinas/Falklands: Conflito entre Argentina e Reino Unido pela posse das Ilhas Malvinas/Falklands." },
    { "ano": 1983, "fato": "Crise dos Mísseis Soviéticos: O mundo enfrenta uma crise de segurança quando a União Soviética instala mísseis nucleares em Cuba." },
    { "ano": 1984, "fato": "Assassinato de Indira Gandhi." },
    { "ano": 1985, "fato": "Mikhail Gorbachev torna-se líder da União Soviética e introduz reformas conhecidas como Glasnost e Perestroika." },
    { "ano": 1986, "fato": "Desastre de Chernobyl." },
    { "ano": 1987, "fato": "Queda do Muro de Berlim." },
    { "ano": 1988, "fato": "Eleições presidenciais no Brasil." },
    { "ano": 1989, "fato": "O comunismo cai na Polônia, Hungria, Alemanha Oriental, Tchecoslováquia, Bulgária e Romênia." },
    { "ano": 1990, "fato": "Libertação de Nelson Mandela após 27 anos de prisão." },
    { "ano": 1991, "fato": "Guerra do Golfo." },
    { "ano": 1992, "fato": "Jogos Olímpicos de Barcelona." },
    { "ano": 1993, "fato": "Lançamento da World Wide Web." },
    { "ano": 1994, "fato": "Nelson Mandela eleito presidente da África do Sul." },
    { "ano": 1995, "fato": "Lançamento do Windows 95." },
    { "ano": 1996, "fato": "Lançamento do clone de Dolly." },
    { "ano": 1997, "fato": "Tratado de Kyoto." },
    { "ano": 1998, "fato": "Impeachment de Bill Clinton." },
    { "ano": 1999, "fato": "Lançamento do Euro." },
    { "ano": 2000, "fato": "Início do Governo Vladimir Putin na Rússia." },
    { "ano": 2001, "fato": "Ataques de 11 de Setembro: Ocorrência de ataques terroristas coordenados pelo grupo Al-Qaeda nos Estados Unidos." },
    { "ano": 2002, "fato": "A empresa de energia Enron declarou falência após um dos maiores escândalos corporativos da história." },
    { "ano": 2003, "fato": "O ônibus espacial Columbia desintegrou-se durante a reentrada na atmosfera, resultando na morte de todos os sete astronautas a bordo." },
    { "ano": 2004, "fato": "Um terremoto de magnitude 9,1 atinge a costa de Sumatra gerando um tsunami que atingiu várias nações ao redor do Oceano Índico, resultando em uma das piores catástrofes naturais da história recente." },
    { "ano": 2005, "fato": "Furacão Katrina." },
    { "ano": 2006, "fato": "Morte de Saddam Hussein e Lançamento do Twitter." },
    { "ano": 2007, "fato": "Lançamento do iPhone." },
    { "ano": 2008, "fato": "Barack Obama foi eleito o 44º presidente dos Estados Unidos e se tornou o primeiro presidente afro-americano do país." },
    { "ano": 2009, "fato": "Pandemia de H1N1 e Terremoto no Haiti." },
    { "ano": 2010, "fato": "Um terremoto de magnitude 9,0 atingiu o Japão, desencadeando um tsunami devastador que causou o colapso da usina nuclear de Fukushima." },
    { "ano": 2011, "fato": "Morte de Osama bin Laden." },
    { "ano": 2012, "fato": "Jogos Olímpicos de Londres." },
    { "ano": 2013, "fato": "Eleição do Papa Francisco." },
    { "ano": 2014, "fato": "Um surto de Ebola se espalhou por vários países da África Ocidental, resultando em milhares de mortes e levando a uma crise de saúde global." },
    { "ano": 2015, "fato": "Ataques terroristas em Paris." },
    { "ano": 2016, "fato": "Eleição de Donald Trump." },
    { "ano": 2017, "fato": "O furacão Maria atingiu Porto Rico como um furacão de categoria 5, causando devastação generalizada e resultando em milhares de mortes." },
    { "ano": 2018, "fato": "Cúpula entre EUA e Coreia do Norte." },
    { "ano": 2019, "fato": "Incêndio na Catedral de Notre-Dame e Pandemia de COVID-19." },
    { "ano": 2020, "fato": "Protestos do movimento Black Lives Matter e Joe Biden foi eleito o 46º presidente dos Estados Unidos." }
];

exports.fatosHistoricos = fatosHistoricos;