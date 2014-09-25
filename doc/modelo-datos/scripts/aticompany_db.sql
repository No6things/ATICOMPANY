--
-- PostgreSQL database dump
--

SET statement_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: agencia; Type: TABLE; Schema: public; Owner: aticompanyuser; Tablespace: 
--

CREATE TABLE agencia (
    id integer NOT NULL,
    nombre character varying(255),
    ubicacion text,
    latitud double precision,
    longitud double precision,
    empresa_id integer,
    created_at timestamp without time zone,
    updated_at timestamp without time zone
);


ALTER TABLE public.agencia OWNER TO aticompanyuser;

--
-- Name: agencia_id_seq; Type: SEQUENCE; Schema: public; Owner: aticompanyuser
--

CREATE SEQUENCE agencia_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.agencia_id_seq OWNER TO aticompanyuser;

--
-- Name: agencia_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: aticompanyuser
--

ALTER SEQUENCE agencia_id_seq OWNED BY agencia.id;


--
-- Name: agencia_paquetes; Type: TABLE; Schema: public; Owner: aticompanyuser; Tablespace: 
--

CREATE TABLE agencia_paquetes (
    id integer NOT NULL,
    fecha_arribo timestamp without time zone,
    agencia_id integer,
    paquete_id integer,
    tipo_estado_id integer,
    created_at timestamp without time zone,
    updated_at timestamp without time zone
);


ALTER TABLE public.agencia_paquetes OWNER TO aticompanyuser;

--
-- Name: agencia_paquetes_id_seq; Type: SEQUENCE; Schema: public; Owner: aticompanyuser
--

CREATE SEQUENCE agencia_paquetes_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.agencia_paquetes_id_seq OWNER TO aticompanyuser;

--
-- Name: agencia_paquetes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: aticompanyuser
--

ALTER SEQUENCE agencia_paquetes_id_seq OWNED BY agencia_paquetes.id;


--
-- Name: empresas; Type: TABLE; Schema: public; Owner: aticompanyuser; Tablespace: 
--

CREATE TABLE empresas (
    id integer NOT NULL,
    nombre character varying(255),
    rif character varying(255),
    frase_comercial character varying(255),
    constante_tarifa double precision,
    porcentaje_tarifa double precision,
    created_at timestamp without time zone,
    updated_at timestamp without time zone
);


ALTER TABLE public.empresas OWNER TO aticompanyuser;

--
-- Name: empresas_id_seq; Type: SEQUENCE; Schema: public; Owner: aticompanyuser
--

CREATE SEQUENCE empresas_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.empresas_id_seq OWNER TO aticompanyuser;

--
-- Name: empresas_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: aticompanyuser
--

ALTER SEQUENCE empresas_id_seq OWNED BY empresas.id;


--
-- Name: paquetes; Type: TABLE; Schema: public; Owner: aticompanyuser; Tablespace: 
--

CREATE TABLE paquetes (
    id integer NOT NULL,
    ancho double precision,
    alto double precision,
    peso double precision,
    descripcion text,
    numero_guia character varying(255),
    costo double precision,
    created_at timestamp without time zone,
    updated_at timestamp without time zone
);


ALTER TABLE public.paquetes OWNER TO aticompanyuser;

--
-- Name: paquetes_id_seq; Type: SEQUENCE; Schema: public; Owner: aticompanyuser
--

CREATE SEQUENCE paquetes_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.paquetes_id_seq OWNER TO aticompanyuser;

--
-- Name: paquetes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: aticompanyuser
--

ALTER SEQUENCE paquetes_id_seq OWNED BY paquetes.id;


--
-- Name: schema_migrations; Type: TABLE; Schema: public; Owner: aticompanyuser; Tablespace: 
--

CREATE TABLE schema_migrations (
    version character varying(255) NOT NULL
);


ALTER TABLE public.schema_migrations OWNER TO aticompanyuser;

--
-- Name: tipo_estados; Type: TABLE; Schema: public; Owner: aticompanyuser; Tablespace: 
--

CREATE TABLE tipo_estados (
    id integer NOT NULL,
    nombre character varying(255),
    abreviacion character varying(255),
    created_at timestamp without time zone,
    updated_at timestamp without time zone
);


ALTER TABLE public.tipo_estados OWNER TO aticompanyuser;

--
-- Name: tipo_estados_id_seq; Type: SEQUENCE; Schema: public; Owner: aticompanyuser
--

CREATE SEQUENCE tipo_estados_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tipo_estados_id_seq OWNER TO aticompanyuser;

--
-- Name: tipo_estados_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: aticompanyuser
--

ALTER SEQUENCE tipo_estados_id_seq OWNED BY tipo_estados.id;


--
-- Name: tipo_usuarios; Type: TABLE; Schema: public; Owner: aticompanyuser; Tablespace: 
--

CREATE TABLE tipo_usuarios (
    id integer NOT NULL,
    nombre character varying(255),
    abreviacion character varying(255),
    created_at timestamp without time zone,
    updated_at timestamp without time zone
);


ALTER TABLE public.tipo_usuarios OWNER TO aticompanyuser;

--
-- Name: tipo_usuarios_id_seq; Type: SEQUENCE; Schema: public; Owner: aticompanyuser
--

CREATE SEQUENCE tipo_usuarios_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tipo_usuarios_id_seq OWNER TO aticompanyuser;

--
-- Name: tipo_usuarios_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: aticompanyuser
--

ALTER SEQUENCE tipo_usuarios_id_seq OWNED BY tipo_usuarios.id;


--
-- Name: usuario_empresas; Type: TABLE; Schema: public; Owner: aticompanyuser; Tablespace: 
--

CREATE TABLE usuario_empresas (
    id integer NOT NULL,
    usuario_id integer,
    empresa_id integer,
    created_at timestamp without time zone,
    updated_at timestamp without time zone
);


ALTER TABLE public.usuario_empresas OWNER TO aticompanyuser;

--
-- Name: usuario_empresas_id_seq; Type: SEQUENCE; Schema: public; Owner: aticompanyuser
--

CREATE SEQUENCE usuario_empresas_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.usuario_empresas_id_seq OWNER TO aticompanyuser;

--
-- Name: usuario_empresas_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: aticompanyuser
--

ALTER SEQUENCE usuario_empresas_id_seq OWNED BY usuario_empresas.id;


--
-- Name: usuarios; Type: TABLE; Schema: public; Owner: aticompanyuser; Tablespace: 
--

CREATE TABLE usuarios (
    id integer NOT NULL,
    nombre character varying(255),
    apellido character varying(255),
    correo_electronico character varying(255),
    fecha_ultimo_acceso timestamp without time zone,
    tipo_usuario_id integer,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    password_digest character varying(255)
);


ALTER TABLE public.usuarios OWNER TO aticompanyuser;

--
-- Name: usuarios_id_seq; Type: SEQUENCE; Schema: public; Owner: aticompanyuser
--

CREATE SEQUENCE usuarios_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.usuarios_id_seq OWNER TO aticompanyuser;

--
-- Name: usuarios_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: aticompanyuser
--

ALTER SEQUENCE usuarios_id_seq OWNED BY usuarios.id;


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: aticompanyuser
--

ALTER TABLE ONLY agencia ALTER COLUMN id SET DEFAULT nextval('agencia_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: aticompanyuser
--

ALTER TABLE ONLY agencia_paquetes ALTER COLUMN id SET DEFAULT nextval('agencia_paquetes_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: aticompanyuser
--

ALTER TABLE ONLY empresas ALTER COLUMN id SET DEFAULT nextval('empresas_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: aticompanyuser
--

ALTER TABLE ONLY paquetes ALTER COLUMN id SET DEFAULT nextval('paquetes_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: aticompanyuser
--

ALTER TABLE ONLY tipo_estados ALTER COLUMN id SET DEFAULT nextval('tipo_estados_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: aticompanyuser
--

ALTER TABLE ONLY tipo_usuarios ALTER COLUMN id SET DEFAULT nextval('tipo_usuarios_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: aticompanyuser
--

ALTER TABLE ONLY usuario_empresas ALTER COLUMN id SET DEFAULT nextval('usuario_empresas_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: aticompanyuser
--

ALTER TABLE ONLY usuarios ALTER COLUMN id SET DEFAULT nextval('usuarios_id_seq'::regclass);


--
-- Data for Name: agencia; Type: TABLE DATA; Schema: public; Owner: aticompanyuser
--

COPY agencia (id, nombre, ubicacion, latitud, longitud, empresa_id, created_at, updated_at) FROM stdin;
\.


--
-- Name: agencia_id_seq; Type: SEQUENCE SET; Schema: public; Owner: aticompanyuser
--

SELECT pg_catalog.setval('agencia_id_seq', 1, false);


--
-- Data for Name: agencia_paquetes; Type: TABLE DATA; Schema: public; Owner: aticompanyuser
--

COPY agencia_paquetes (id, fecha_arribo, agencia_id, paquete_id, tipo_estado_id, created_at, updated_at) FROM stdin;
\.


--
-- Name: agencia_paquetes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: aticompanyuser
--

SELECT pg_catalog.setval('agencia_paquetes_id_seq', 1, false);


--
-- Data for Name: empresas; Type: TABLE DATA; Schema: public; Owner: aticompanyuser
--

COPY empresas (id, nombre, rif, frase_comercial, constante_tarifa, porcentaje_tarifa, created_at, updated_at) FROM stdin;
\.


--
-- Name: empresas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: aticompanyuser
--

SELECT pg_catalog.setval('empresas_id_seq', 1, false);


--
-- Data for Name: paquetes; Type: TABLE DATA; Schema: public; Owner: aticompanyuser
--

COPY paquetes (id, ancho, alto, peso, descripcion, numero_guia, costo, created_at, updated_at) FROM stdin;
\.


--
-- Name: paquetes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: aticompanyuser
--

SELECT pg_catalog.setval('paquetes_id_seq', 1, false);


--
-- Data for Name: schema_migrations; Type: TABLE DATA; Schema: public; Owner: aticompanyuser
--

COPY schema_migrations (version) FROM stdin;
20140924041724
20140924042022
20140924042132
20140924042408
20140924042837
20140924043040
20140924043340
20140924043455
20140924123137
\.


--
-- Data for Name: tipo_estados; Type: TABLE DATA; Schema: public; Owner: aticompanyuser
--

COPY tipo_estados (id, nombre, abreviacion, created_at, updated_at) FROM stdin;
\.


--
-- Name: tipo_estados_id_seq; Type: SEQUENCE SET; Schema: public; Owner: aticompanyuser
--

SELECT pg_catalog.setval('tipo_estados_id_seq', 1, false);


--
-- Data for Name: tipo_usuarios; Type: TABLE DATA; Schema: public; Owner: aticompanyuser
--

COPY tipo_usuarios (id, nombre, abreviacion, created_at, updated_at) FROM stdin;
1	Administrador	A	2014-09-25 03:27:02.03759	2014-09-25 03:27:02.03759
2	Usuario Afiliado	UA	2014-09-25 03:27:14.405341	2014-09-25 03:27:14.405341
3	Operador	O	2014-09-25 03:27:21.162509	2014-09-25 03:27:21.162509
\.


--
-- Name: tipo_usuarios_id_seq; Type: SEQUENCE SET; Schema: public; Owner: aticompanyuser
--

SELECT pg_catalog.setval('tipo_usuarios_id_seq', 3, true);


--
-- Data for Name: usuario_empresas; Type: TABLE DATA; Schema: public; Owner: aticompanyuser
--

COPY usuario_empresas (id, usuario_id, empresa_id, created_at, updated_at) FROM stdin;
\.


--
-- Name: usuario_empresas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: aticompanyuser
--

SELECT pg_catalog.setval('usuario_empresas_id_seq', 1, false);


--
-- Data for Name: usuarios; Type: TABLE DATA; Schema: public; Owner: aticompanyuser
--

COPY usuarios (id, nombre, apellido, correo_electronico, fecha_ultimo_acceso, tipo_usuario_id, created_at, updated_at, password_digest) FROM stdin;
1	jesus	gomez	jgomez@mail.com	2014-09-25 07:28:03.331246	2	2014-09-25 07:28:03.434279	2014-09-25 07:28:03.434279	$2a$10$ZS.7zB2tz4PO9N640f9KLuIsH341J0aVgacGSnO.ZBuytcbPPc6/y
2	maria	romero	mromero@mail.com	2014-09-25 07:29:28.144559	2	2014-09-25 07:29:28.238291	2014-09-25 07:29:28.238291	$2a$10$DZE47Yk4a4rsgzmULaUw7upa55UcEQPbUVHUBul7RvMT81pE1vix.
3	laura	sanchez	lsanchez@mail.com	2014-09-25 07:45:10.695291	2	2014-09-25 07:45:10.789355	2014-09-25 07:45:10.789355	$2a$10$hoh.yMKN9DFNHHKjmB1duOUxQ0u.duiPHaUXul5DCgJPMZvPxI5Ou
4	alejandro	martin	amartin@mail.com	2014-09-25 07:46:31.332069	2	2014-09-25 07:46:31.411537	2014-09-25 07:46:31.411537	$2a$10$2E.uYH.FuM/M9mxuN4ZTt.74Ll0QPbXRAYkDh3aq21h07R9ZQeGbS
5	pedro	valdivieso	pvaldivieso@mail.com	2014-09-25 07:55:25.058961	2	2014-09-25 07:55:25.149683	2014-09-25 07:55:25.149683	$2a$10$26LgSRoXC4HXzDvuQRr3vu57.6r0/.NEyN5/K.CS.XX9n44iasxIS
6	karina	moreno	kmoreno@mail.com	2014-09-25 07:57:59.973369	2	2014-09-25 07:58:00.05168	2014-09-25 07:58:00.05168	$2a$10$JrF9VcFnKGuzzkNYAa6QquCeZ9bp1xLQNSBnSQdl3CbW9iQ/GoMBC
7	bianca	abreu	babreu@mail.com	2014-09-25 07:59:05.069099	2	2014-09-25 07:59:05.144285	2014-09-25 07:59:05.144285	$2a$10$Knq6ZTE84iearmhcExbLv.ytxWGD.BOkNfL.S9XkRdRVktddjDQkW
8	juan	lopez	jlopez@mail.com	2014-09-25 08:02:04.94928	2	2014-09-25 08:02:05.032335	2014-09-25 08:02:05.032335	$2a$10$5XP0HiQOb8WVqudRONY3ge286XsmVVduKBMJ7hlkb8Z5SFHILHAly
\.


--
-- Name: usuarios_id_seq; Type: SEQUENCE SET; Schema: public; Owner: aticompanyuser
--

SELECT pg_catalog.setval('usuarios_id_seq', 8, true);


--
-- Name: agencia_paquetes_pkey; Type: CONSTRAINT; Schema: public; Owner: aticompanyuser; Tablespace: 
--

ALTER TABLE ONLY agencia_paquetes
    ADD CONSTRAINT agencia_paquetes_pkey PRIMARY KEY (id);


--
-- Name: agencia_pkey; Type: CONSTRAINT; Schema: public; Owner: aticompanyuser; Tablespace: 
--

ALTER TABLE ONLY agencia
    ADD CONSTRAINT agencia_pkey PRIMARY KEY (id);


--
-- Name: empresas_pkey; Type: CONSTRAINT; Schema: public; Owner: aticompanyuser; Tablespace: 
--

ALTER TABLE ONLY empresas
    ADD CONSTRAINT empresas_pkey PRIMARY KEY (id);


--
-- Name: paquetes_pkey; Type: CONSTRAINT; Schema: public; Owner: aticompanyuser; Tablespace: 
--

ALTER TABLE ONLY paquetes
    ADD CONSTRAINT paquetes_pkey PRIMARY KEY (id);


--
-- Name: tipo_estados_pkey; Type: CONSTRAINT; Schema: public; Owner: aticompanyuser; Tablespace: 
--

ALTER TABLE ONLY tipo_estados
    ADD CONSTRAINT tipo_estados_pkey PRIMARY KEY (id);


--
-- Name: tipo_usuarios_pkey; Type: CONSTRAINT; Schema: public; Owner: aticompanyuser; Tablespace: 
--

ALTER TABLE ONLY tipo_usuarios
    ADD CONSTRAINT tipo_usuarios_pkey PRIMARY KEY (id);


--
-- Name: usuario_empresas_pkey; Type: CONSTRAINT; Schema: public; Owner: aticompanyuser; Tablespace: 
--

ALTER TABLE ONLY usuario_empresas
    ADD CONSTRAINT usuario_empresas_pkey PRIMARY KEY (id);


--
-- Name: usuarios_pkey; Type: CONSTRAINT; Schema: public; Owner: aticompanyuser; Tablespace: 
--

ALTER TABLE ONLY usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id);


--
-- Name: index_agencia_on_nombre; Type: INDEX; Schema: public; Owner: aticompanyuser; Tablespace: 
--

CREATE INDEX index_agencia_on_nombre ON agencia USING btree (nombre);


--
-- Name: index_agencia_paquetes_on_fecha_arribo; Type: INDEX; Schema: public; Owner: aticompanyuser; Tablespace: 
--

CREATE INDEX index_agencia_paquetes_on_fecha_arribo ON agencia_paquetes USING btree (fecha_arribo);


--
-- Name: index_empresas_on_nombre; Type: INDEX; Schema: public; Owner: aticompanyuser; Tablespace: 
--

CREATE INDEX index_empresas_on_nombre ON empresas USING btree (nombre);


--
-- Name: index_empresas_on_rif; Type: INDEX; Schema: public; Owner: aticompanyuser; Tablespace: 
--

CREATE INDEX index_empresas_on_rif ON empresas USING btree (rif);


--
-- Name: index_paquetes_on_costo; Type: INDEX; Schema: public; Owner: aticompanyuser; Tablespace: 
--

CREATE INDEX index_paquetes_on_costo ON paquetes USING btree (costo);


--
-- Name: index_paquetes_on_numero_guia; Type: INDEX; Schema: public; Owner: aticompanyuser; Tablespace: 
--

CREATE INDEX index_paquetes_on_numero_guia ON paquetes USING btree (numero_guia);


--
-- Name: index_tipo_estados_on_abreviacion; Type: INDEX; Schema: public; Owner: aticompanyuser; Tablespace: 
--

CREATE INDEX index_tipo_estados_on_abreviacion ON tipo_estados USING btree (abreviacion);


--
-- Name: index_tipo_usuarios_on_abreviacion; Type: INDEX; Schema: public; Owner: aticompanyuser; Tablespace: 
--

CREATE INDEX index_tipo_usuarios_on_abreviacion ON tipo_usuarios USING btree (abreviacion);


--
-- Name: index_usuarios_on_apellido; Type: INDEX; Schema: public; Owner: aticompanyuser; Tablespace: 
--

CREATE INDEX index_usuarios_on_apellido ON usuarios USING btree (apellido);


--
-- Name: index_usuarios_on_correo_electronico; Type: INDEX; Schema: public; Owner: aticompanyuser; Tablespace: 
--

CREATE INDEX index_usuarios_on_correo_electronico ON usuarios USING btree (correo_electronico);


--
-- Name: index_usuarios_on_fecha_ultimo_acceso; Type: INDEX; Schema: public; Owner: aticompanyuser; Tablespace: 
--

CREATE INDEX index_usuarios_on_fecha_ultimo_acceso ON usuarios USING btree (fecha_ultimo_acceso);


--
-- Name: index_usuarios_on_nombre; Type: INDEX; Schema: public; Owner: aticompanyuser; Tablespace: 
--

CREATE INDEX index_usuarios_on_nombre ON usuarios USING btree (nombre);


--
-- Name: unique_schema_migrations; Type: INDEX; Schema: public; Owner: aticompanyuser; Tablespace: 
--

CREATE UNIQUE INDEX unique_schema_migrations ON schema_migrations USING btree (version);


--
-- Name: public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

