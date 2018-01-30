"use strict";
var Post = (function () {
    function Post(postId, id, name, email, body) {
        this.postId = postId;
        this.id = id;
        this.name = name;
        this.email = email;
        this.body = body;
    }
    return Post;
}());
exports.Post = Post;
//# sourceMappingURL=post.js.map