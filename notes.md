I want to implement something like:

# Table

id  | language  | i18n_message  | group     | i18n_key
1   | pt_BR     | "Obrigatório" | shared    | validation.require
2   | en_US     | "Required"    | shared    | validation.require
2   | es_ES     | "Requerido"   | shared    | validation.require

This will generate the file bellow:

es_ES/shared.json
{
    "validation.require": "Requerido"
}


en_US/shared.json
{
    "validation.require": "Required"
}


pt_BR/shared.json
{
    "validation.require": "Obrigatório"
}

# Tradeoffs

It currently doesn't scale for multiple companies. For now, being self-hosted is sufficient.