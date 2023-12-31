package com.bdos.ssafywiki.discussion.entity;

import com.bdos.ssafywiki.document.entity.Document;
import com.bdos.ssafywiki.user.entity.User;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor
@ToString
@EntityListeners(AuditingEntityListener.class)
@Table(name = "discussions")
public class Discussion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "discussion_id")
    private Long id;

    @Column(name = "discussion_content", nullable = false)
    private String content;

    @CreatedDate
    @Column(name = "discussion_created_at", columnDefinition = "TIMESTAMP", updatable = false)
    private LocalDateTime createdAt;

    @LastModifiedDate
    @Column(name = "discussion_modified_at", columnDefinition = "TIMESTAMP")
    private LocalDateTime modifiedAt;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "document_id", nullable = false)
    private Document document;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "discussion_user_id", nullable = false)
    private User user;

    @Builder
    public Discussion(String content, Document document, User user) {
        this.content = content;
        this.document = document;
        this.user = user;
    }

    public void setUserAndDocument(User user, Document document) {
        this.user = user;
        this.document = document;
    }

}
