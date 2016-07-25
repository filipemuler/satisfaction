-- Contas
-- Despesas
INSERT INTO "public"."conta" (id,descricao,nome,referentea_id, ordem, entrada, cartao) VALUES (1,'Despesa','Despesa', null, null, false, false);
INSERT INTO "public"."conta" (id,descricao,nome,referentea_id, ordem, entrada, cartao) VALUES (2,'Supermercado','Supermercado', 1, null, false, false);
INSERT INTO "public"."conta" (id,descricao,nome,referentea_id, ordem, entrada, cartao) VALUES (3,'Gasolina','Gasolina', 1, null, false, false);
INSERT INTO "public"."conta" (id,descricao,nome,referentea_id, ordem, entrada, cartao) VALUES (4,'IPVA','IPVA', 1, null, false, false);
INSERT INTO "public"."conta" (id,descricao,nome,referentea_id, ordem, entrada, cartao) VALUES (5,'Pintura','Pintura', 1, null, false, false);
INSERT INTO "public"."conta" (id,descricao,nome,referentea_id, ordem, entrada, cartao) VALUES (6,'Aluguel','Aluguel', 1, null, false, false);

-- Cartoes Saida
INSERT INTO "public"."conta" (id,descricao,nome,referentea_id, ordem, entrada, cartao) VALUES (7,'Cartão Visa','Cartão Visa', 1, null, false, true);
INSERT INTO "public"."conta" (id,descricao,nome,referentea_id, ordem, entrada, cartao) VALUES (8,'Cartão MasterCard','Cartão MasterCard', 1, null, false, true);

-- Receitas
INSERT INTO "public"."conta" (id,descricao,nome,referentea_id, ordem, entrada, cartao) VALUES (10,'Receita','Receita', null, null, true, false);
INSERT INTO "public"."conta" (id,descricao,nome,referentea_id, ordem, entrada, cartao) VALUES (11,'Copa Manha','Copa Manha', 10, 1, true, false);
INSERT INTO "public"."conta" (id,descricao,nome,referentea_id, ordem, entrada, cartao) VALUES (12,'Copa Tarde','Copa Tarde', 10, 3, true, false);
INSERT INTO "public"."conta" (id,descricao,nome,referentea_id, ordem, entrada, cartao) VALUES (13,'Copa Noite','Copa Noite', 10, 5, true, false);
INSERT INTO "public"."conta" (id,descricao,nome,referentea_id, ordem, entrada, cartao) VALUES (14,'Diaria Manha','Diaria Manha', 10, 2, true, false);
INSERT INTO "public"."conta" (id,descricao,nome,referentea_id, ordem, entrada, cartao) VALUES (15,'Diaria Tarde','Diaria Tarde', 10, 4, true, false);
INSERT INTO "public"."conta" (id,descricao,nome,referentea_id, ordem, entrada, cartao) VALUES (16,'Diaria Noite','Diaria Noite', 10, 6, true, false);

-- Cartoes Entrada
INSERT INTO "public"."conta" (id,descricao,nome,referentea_id, ordem, entrada, cartao) VALUES (17,'Cartão Visa','Cartão Visa', 10, null, true, true);
INSERT INTO "public"."conta" (id,descricao,nome,referentea_id, ordem, entrada, cartao) VALUES (18,'Cartão MasterCard','Cartão MasterCard', 10, null, true, true);

-- Fluxo
INSERT INTO "public"."fluxo" (id,nome,descricao) VALUES (19, 'Carro Manha', 'Carro Manha');
INSERT INTO "public"."fluxo" (id,nome,descricao) VALUES (20, 'Carro Tarde', 'Carro Tarde');
INSERT INTO "public"."fluxo" (id,nome,descricao) VALUES (21, 'Carro Noite', 'Carro Noite');

-- Filial
INSERT INTO "public"."filial" (id,nome) VALUES (22, 'Motel Prestige');
INSERT INTO "public"."filial" (id,nome) VALUES (23, 'Motel Lamour');
INSERT INTO "public"."filial" (id,nome) VALUES (24, 'Motel VemNiMim');
INSERT INTO "public"."filial" (id,nome) VALUES (25, 'Motel Paixao');
INSERT INTO "public"."filial" (id,nome) VALUES (26, 'Motel Agua na Boca');
INSERT INTO "public"."filial" (id,nome) VALUES (27, 'Motel Maluco Beleza');

-- Consolidado Final
-- INSERT INTO "public"."biconsolidadofinal" (id,filialid,filialnome, porcentagem,receita,despesa,data) VALUES (100,1000, 'Motel X', 50.0, 1000, 1000, CURRENT_TIMESTAMP);