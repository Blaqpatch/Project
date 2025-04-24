# Project
Webmax Project
<!DOCTYPE html>
<!-- saved from url=(0036)https://blaqpatch.github.io/Project/ -->
<html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Fashion Design Portfolio showcasing unique and stylish designs, including ready-to-wear, bridal wear, and African traditional clothing.">
    <meta name="keywords" content="fashion design, portfolio, bridal wear, African clothing, ready-to-wear">
    <title>Fashion Design Portfolio</title>
    <link rel="stylesheet" href="./Fashion Design Portfolio_files/Project.css">
</head>
<body>
    <header>
        <div class="container">
            <div class="header-content">
                <img src="./Fashion Design Portfolio_files/Logo 1.jpg" alt="Fashion Design Portfolio Logo" class="logo">
                <h1>Fashion Design Portfolio</h1>
                <p>Showcasing the elegance of culture, creativity, and couture — step into a world of signature designs crafted with heart, heritage, and high fashion.</p>
            </div>
            <nav aria-label="Main Navigation">
                <ul>
                    <li><a href="https://blaqpatch.github.io/Project/#about">About</a></li>
                    <li><a href="https://blaqpatch.github.io/Project/#portfolio">Portfolio</a></li>
                    <li><a href="https://blaqpatch.github.io/Project/#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main>
        <section id="about" class="section fade-in-hidden fade-in-visible">
            <div class="container">
                <h2>ABOUT ME</h2>
                <p>Hello and welcome to my fashion design portfolio. I’m Unathi Nogantshi, a dedicated and innovative fashion designer passionate about crafting pieces that celebrate both individuality and cultural heritage. My journey in fashion began with a desire to tell stories through fabric and silhouette.</p>

                <p>My designs reflect a blend of timeless elegance and contemporary flair, with a strong focus on quality, detail, and the perfect fit. Whether it's a made-to-order gown or an everyday ready-to-wear outfit, each piece is made with intention and love.</p>

                <p>I find endless inspiration in African artistry and traditional patterns, which I reinterpret with modern cuts and luxurious materials. This fusion creates clothing that is both wearable and meaningful, speaking to bold, confident individuals with a taste for originality.</p>

                <p>From custom bridal gowns to bold streetwear pieces, I offer a wide range of services including:</p>
                <ul>
                    <li><strong>Alterations:</strong> Precise tailoring for a perfect fit</li>
                    <li><strong>Ready to Wear:</strong> Trendy designs available off the rack</li>
                    <li><strong>African Traditional Clothing:</strong> Celebrating heritage through fashion</li>
                    <li><strong>Bridal Wear:</strong> Bespoke wedding dresses made to your vision</li>
                    <li><strong>Made to Order:</strong> Formal and casual looks tailored to your body and style</li>
                </ul>
            </div>
        </section>

        <section id="portfolio" class="section fade-in-hidden fade-in-visible">
            <div class="container">
                <h2>PORTFOLIO</h2>
                <p>Explore a curated selection of my most celebrated works. From bold statement pieces to graceful bridal gowns, each design tells a unique story. I create with a deep sense of purpose, honoring every client’s individuality while blending classic tailoring with creative flair.</p>

                <p>My portfolio spans a diverse array of garments that cater to different occasions and cultural aesthetics. Whether you're drawn to the luxurious drape of satin or the vibrant energy of African prints, there's something in my collection for everyone.</p>

                <div class="gallery">
                    <figure class="item">
                        <img src="./Fashion Design Portfolio_files/Seven-Seas-Blue-Oversize-Tribal-Jacket-Ashanti-Empress.jpg" alt="Ready to Wear - Oversize Tribal Jacket">
                        <figcaption>A modern twist on traditional African patterns, this oversized jacket makes a powerful fashion statement.</figcaption>
                    </figure>
                    <figure class="item">
                        <img src="./Fashion Design Portfolio_files/Tradition Bridal.jpg" alt="Traditional Bridal Wear">
                        <figcaption>Intricate beading and luxurious fabrics bring this traditional bridal look to life—designed to honor heritage and style.</figcaption>
                    </figure>
                    <figure class="item">
                        <img src="./Fashion Design Portfolio_files/Teal-satin-Matric-Dance-dress-with-slit-1.jpg" alt="Made to Order - Teal Satin Dance Dress">
                        <figcaption>A custom satin gown with a daring slit, perfect for formal occasions where elegance meets drama.</figcaption>
                    </figure>
                </div>
            </div>
        </section>

        <section id="contact" class="section fade-in-hidden">
            <div class="container">
                <h2>Contact Me</h2>
                <p>I’d love to hear from you! Whether you have a question about a custom order, want to book a consultation, or just feel like saying hello — I’m all ears. Let’s bring your fashion vision to life!</p>
                <p>Fill in the form below and I’ll get back to you as soon as I can.</p>
                <form id="contactForm">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required="" minlength="2" maxlength="50">

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required="">

                    <label for="message">Message:</label>
                    <textarea id="message" name="message" required="" minlength="10" maxlength="500"></textarea>

                    <button type="submit">Send</button>
                </form>
                <div id="formMessage" aria-live="polite"></div>
            </div>
        </section>
    </main>

    <footer>
        <div class="container">
            <p>© 2025 Blaqpatch Fashion Design Portfolio by Unathi Nogantshi. All rights reserved.</p>
        </div>
    </footer>

    <script src="./Fashion Design Portfolio_files/Project.js.download"></script>
    <script>
        // JavaScript for form handling
        document.getElementById('contactForm').addEventListener('submit', function (e) {
            e.preventDefault();
            const formMessage = document.getElementById('formMessage');
            formMessage.textContent = 'Thank you. A trusted team member will contact you soon.';
            formMessage.style.color = 'white';
            // Clear form fields
            document.getElementById('contactForm').reset();
        });
    </script>


</body></html>
