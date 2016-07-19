package br.com.af.web.dto;

/**
 * Created by filipe on 14/07/16.
 */
public class SelectGroupDTO {

    private String groupId;
    private String title;

    public SelectGroupDTO(String groupId, String title) {
        this.groupId = groupId;
        this.title = title;
    }

    public String getGroupId() {
        return groupId;
    }

    public void setGroupId(String groupId) {
        this.groupId = groupId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
