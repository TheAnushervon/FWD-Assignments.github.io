<div class = "container">
    <div class = "row">
        <div class = "contact-left">
            <h1 class = "sub-title" style = "color: red;">Contact Me</h1>
            <p><i class="fa-solid fa-square-phone"></i> +7 937 042 2187</p>
            <div class = "social-icons">
                <a href ="https://t.me/the_anushervon"><i class="fa-brands fa-telegram"></i></a>
                <a href ="mailto:anushervon4j@gmail.com"><i class="fa-solid fa-envelope"></i></a>
                <a href = "https://github.com/TheAnushervon"><i class="fa-brands fa-github"></i></a>
            </div>
        </div>
        <div class = "contact-right">
            <form name = "submit-to-google-sheet">
                <input type = "text" name = "Name" placeholder = "Your name" required>
                <input type = "email" name = "Email" placeholder="Your email" required>
                <textarea name = "Message" rows = "6" placeholder="Your Message"></textarea>
                <button type = "submit" class="btn btn2">Submit</button>
            </form>
            <span id = "msg"></span>
        </div>
    </div>
</div>
<style>
 /* contact section styles */
#contact {
  background-color: #f5f5f5;
  padding: 60px 0;
}

.contact-left {
  flex: 1;
  margin-right: 30px;
}

.contact-right {
  flex: 1;
}

.sub-title {
  font-size: 36px;
  margin-bottom: 20px;
}

.social-icons a {
  font-size: 30px;
  margin-right: 20px;
  color: #333;
  transition: color 0.3s ease;
}

.social-icons a:hover {
  color: red;
}

form input,
form textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

form input:focus,
form textarea:focus {
  outline: none;
  border-color: #ff6b6b;
}

.btn.btn2 {
  background-color: red;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn.btn2:hover {
  background-color: #e65c5c;
}

</style>