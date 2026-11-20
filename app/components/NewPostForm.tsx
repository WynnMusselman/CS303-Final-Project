"use client";

import Link from "next/link";
import { useState } from "react";

function hasText(value: string) {
    for (const character of value) {
        if (!" \t\n\r".includes(character)) return true;
    }
    return false;
}

export default function NewPostForm() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [tag, setTag] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    function submitPost() {
        if (isSubmitting) return;

        if (!hasText(title) || !hasText(content)) {
            setMessage("Enter a title and content.");
            return;
        }

        const allowed = "abcdefghijklmnopqrstuvwxyz0123456789-_";
        const start = tag.startsWith("#") ? 1 : 0;
        let tagText = "";

        if (tag === "#") {
            setMessage("Enter a tag after #, or leave the field blank.");
            return;
        }

        for (let i = start; i<tag.length; i++) {
            if (!allowed.includes(tag[i])) {
                setMessage("Use lowercase letters, numbers, hyphens, or underscores. No spaces.");
                return;
            }
            tagText += tag[i];
        }

        setMessage("");
        setIsSubmitting(true);

        fetch("/api/post", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title,
                content,
                tags: tagText === "" ? [] : [tagText],
            }),
        })
            .then((response) => {
                if (response.status === 400) {
                    setMessage("The posts endpoint is unavailable. Your draft is still here.")
                } else if (response.status >= 200 && response.status < 300) {
                    setTitle("");
                    setContent("");
                }
            })
    }
}