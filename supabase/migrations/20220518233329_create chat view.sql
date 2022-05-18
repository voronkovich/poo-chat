CREATE OR REPLACE VIEW public.chat
 AS
 SELECT m.id,
    m.created_at,
    m.content,
    u.raw_user_meta_data ->> 'username'::text AS username
   FROM messages m
     JOIN auth.users u ON u.id = m.user_id;

ALTER TABLE public.chat
    OWNER TO postgres;

GRANT ALL ON TABLE public.chat TO authenticated;
GRANT ALL ON TABLE public.chat TO postgres;
GRANT ALL ON TABLE public.chat TO service_role;
