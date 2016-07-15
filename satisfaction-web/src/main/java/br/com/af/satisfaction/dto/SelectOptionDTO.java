package br.com.af.satisfaction.dto;

/**
 * Created by filipe on 14/07/16.
 */
public class SelectOptionDTO {

    private Long value;
    private String groupId;
    private String label;

    public SelectOptionDTO(Long value, String groupId, String label) {
        this.value = value;
        this.groupId = groupId;
        this.label = label;
    }

    public Long getValue() {
        return value;
    }

    public void setValue(Long value) {
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
