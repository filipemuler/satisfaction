#Contas
#Despesas
INSERT INTO "public"."conta" (id,descricao,nome,referentea_id, ordem, entrada) VALUES (1,'Despesa','Despesa', null, null, false);
INSERT INTO "public"."conta" (id,descricao,nome,referentea_id, ordem, entrada) VALUES (2,'Supermercado','Supermercado', 1, null, false);
INSERT INTO "public"."conta" (id,descricao,nome,referentea_id, ordem, entrada) VALUES (3,'Gasolina','Gasolina', 1, null, false);
INSERT INTO "public"."conta" (id,descricao,nome,referentea_id, ordem, entrada) VALUES (4,'IPVA','IPVA', 1, null, false);
INSERT INTO "public"."conta" (id,descricao,nome,referentea_id, ordem, entrada) VALUES (5,'Pintura','Pintura', 1, null, false);
INSERT INTO "public"."conta" (id,descricao,nome,referentea_id, ordem, entrada) VALUES (6,'Aluguel','Aluguel', 1, null, false);

#Receitas
INSERT INTO "public"."conta" (id,descricao,nome,referentea_id, ordem, entrada) VALUES (10,'Receita','Receita', null, null, true);
INSERT INTO "public"."conta" (id,descricao,nome,referentea_id, ordem, entrada) VALUES (11,'Copa Manha','Copa Manha', 10, 1, true);
INSERT INTO "public"."conta" (id,descricao,nome,referentea_id, ordem, entrada) VALUES (12,'Copa Tarde','Copa Tarde', 10, 3, true);
INSERT INTO "public"."conta" (id,descricao,nome,referentea_id, ordem, entrada) VALUES (13,'Copa Noite','Copa Noite', 10, 5, true);
INSERT INTO "public"."conta" (id,descricao,nome,referentea_id, ordem, entrada) VALUES (14,'Diaria Manha','Diaria Manha', 10, 2, true);
INSERT INTO "public"."conta" (id,descricao,nome,referentea_id, ordem, entrada) VALUES (15,'Diaria Tarde','Diaria Tarde', 10, 4, true);
INSERT INTO "public"."conta" (id,descricao,nome,referentea_id, ordem, entrada) VALUES (16,'Diaria Noite','Diaria Noite', 10, 6, true);

#Consolidado Final
INSERT INTO "public"."biconsolidadofinal" (id,filialid,filialnome, porcentagem,receita,despesa,data) VALUES (100,1000, "Motel X", 50.0, 1000, 1000, CURRENT_TIMESTAMP);