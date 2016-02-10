package br.com.af.satisfaction.config;

import java.util.List;

/**
 * Created by filipe on 10/02/16.
 */
public class Paginator<T> {


    private Long totalResults;
    private Long pages;
    private List<T> list;

    public Paginator(Long totalResults, List<T> t, Long  pages) {
        this.totalResults = totalResults;
        this.list = t;
        this.pages = pages;
    }

    public Long getTotalResults() {
        return totalResults;
    }

    public void setTotalResults(Long totalResults) {
        this.totalResults = totalResults;
    }

    public List<T> getList() {
        return list;
    }

    public void setList(List<T> t) {
        this.list = t;
    }

    public Long getPages() {
        return pages;
    }

    public void setPages(Long pages) {
        this.pages = pages;
    }
}
