#Contas
#Despesas
INSERT INTO "public"."conta" (id,descricao,nome,referentea_id, ordem, entrada, cartao) VALUES (1,'Despesa','Despesa', null, null, false, false);
INSERT INTO "public"."conta" (id,descricao,nome,referentea_id, ordem, entrada, cartao) VALUES (2,'Supermercado','Supermercado', 1, null, false, false);
INSERT INTO "public"."conta" (id,descricao,nome,referentea_id, ordem, entrada, cartao) VALUES (3,'Gasolina','Gasolina', 1, null, false, false);
INSERT INTO "public"."conta" (id,descricao,nome,referentea_id, ordem, entrada, cartao) VALUES (4,'IPVA','IPVA', 1, null, false, false);
INSERT INTO "public"."conta" (id,descricao,nome,referentea_id, ordem, entrada, cartao) VALUES (5,'Pintura','Pintura', 1, null, false, false);
INSERT INTO "public"."conta" (id,descricao,nome,referentea_id, ordem, entrada, cartao) VALUES (6,'Aluguel','Aluguel', 1, null, false, false);

#Receitas
INSERT INTO "public"."conta" (id,descricao,nome,referentea_id, ordem, entrada, cartao) VALUES (10,'Receita','Receita', null, null, true, false);
INSERT INTO "public"."conta" (id,descricao,nome,referentea_id, ordem, entrada, cartao) VALUES (11,'Copa Manha','Copa Manha', 10, 1, true, false);
INSERT INTO "public"."conta" (id,descricao,nome,referentea_id, ordem, entrada, cartao) VALUES (12,'Copa Tarde','Copa Tarde', 10, 3, true, false);
INSERT INTO "public"."conta" (id,descricao,nome,referentea_id, ordem, entrada, cartao) VALUES (13,'Copa Noite','Copa Noite', 10, 5, true, false);
INSERT INTO "public"."conta" (id,descricao,nome,referentea_id, ordem, entrada, cartao) VALUES (14,'Diaria Manha','Diaria Manha', 10, 2, true, false);
INSERT INTO "public"."conta" (id,descricao,nome,referentea_id, ordem, entrada, cartao) VALUES (15,'Diaria Tarde','Diaria Tarde', 10, 4, true, false);
INSERT INTO "public"."conta" (id,descricao,nome,referentea_id, ordem, entrada, cartao) VALUES (16,'Diaria Noite','Diaria Noite', 10, 6, true, false);

#Filial
INSERT INTO "public"."filial" (id,nome) VALUES (17, 'Motel Prestige');
INSERT INTO "public"."filial" (id,nome) VALUES (18, 'Motel Lamour');
INSERT INTO "public"."filial" (id,nome) VALUES (19, 'Motel VemNiMim');
INSERT INTO "public"."filial" (id,nome) VALUES (20, 'Motel Paixao');
INSERT INTO "public"."filial" (id,nome) VALUES (21, 'Motel Agua na Boca');

#Consolidado Final
INSERT INTO "public"."biconsolidadofinal" (id,filialid,filialnome, porcentagem,receita,despesa,data) VALUES (100,1000, 'Motel X', 50.0, 1000, 1000, CURRENT_TIMESTAMP);