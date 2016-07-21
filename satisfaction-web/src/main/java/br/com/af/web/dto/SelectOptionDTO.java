package br.com.af.web.dto;

/**
 * Created by filipe on 14/07/16.
 */
public class SelectOptionDTO {

    private String value;
    private String groupId;
    private String label;

    public SelectOptionDTO(String value, String groupId, String label) {
        this.value = value;
        this.groupId = groupId;
        this.label = label;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public String getGroupId() {
        return groupId;
    }

    public void setGroupId(String groupId) {
        this.groupId = groupId;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }
}
