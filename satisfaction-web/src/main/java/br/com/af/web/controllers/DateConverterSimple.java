package br.com.af.web.controllers;

import br.com.caelum.vraptor.serialization.gson.DateGsonConverter;
import com.google.gson.*;

import javax.enterprise.inject.Specializes;
import java.lang.reflect.Type;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by filipe on 23/08/16.
 */
@Specializes
public class DateConverterSimple extends DateGsonConverter{

    @Override
    public Date deserialize(JsonElement json, Type type, JsonDeserializationContext context) throws JsonParseException {
        try {
            return this.getFormat().parse(json.getAsString());
        } catch (ParseException var5) {
            throw new JsonSyntaxException(json.getAsString(), var5);
        }
    }

    @Override
    public JsonElement serialize(Date date, Type type, JsonSerializationContext jsonSerializationContext) {
        String dateString = this.getFormat().format(date);
        return new JsonPrimitive(dateString);
    }

    protected DateFormat getFormat() {
        return new SimpleDateFormat("yyyy-MM-dd");
    }
}
