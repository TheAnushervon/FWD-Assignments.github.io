<div class="container">
    <h1 class = "sub-title"> My Work</h1>
    <div class="work-list">
        <!-- <h1>dsf</h1> -->

        <div class="work">
            <nav class = "projects">
                <ul>
                    <li><a href = "/vibechecker">Vibechecker</a></li>
                    <li><a href = "/clicker">Cryptoclicker</a></li>
                    <li><a href = "/parser">Telegram-parser</a></li>
                    <li><a href = "/students">Students-database</a></li>
                    <li><a href = "/myblog">MyBlog</a></li>
                </ul>
           </nav>
        </div>
    </div>
</div>
<style>
.container {
  max-width: 1100px;
  margin: auto;
  padding: 0 20px;
}

.sub-title {
  text-align: center;
  margin-bottom: 40px;
  color: red;
}

.work-list {
  display: flex;
  flex-wrap: wrap;
  justify-content:center ;
  align-items: center;
}

.work {
  flex-basis: calc(33.333% - 20px);
  margin-bottom: 30px;
}

.projects ul {
  list-style: none;
  padding: 0;
}

.projects li {
  margin-bottom: 10px;
  text-align: center;
}

.projects a {
  display: block;
  font-size: 20px;
  font-weight: bold;
  color: #333;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.projects a:hover {
  background-color: #333;
  color: #fff;
}

</style>