import React, { useEffect } from "react";

const SocialMediaShowcase: React.FC = () => {
  // Load Instagram embed script once
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        {/* <h2 className="text-3xl font-bold text-center mb-12">
          Showcasing Our Social Media Posts
        </h2> */}

        {/* Grid for posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Post 1 */}
          <div className="flex justify-center">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink="https://www.instagram.com/reel/DNYWNzGTR9f/?utm_source=ig_embed&utm_campaign=loading"
              data-instgrm-version="14"
              style={{
                background: "#FFF",
                border: 0,
                borderRadius: "3px",
                boxShadow:
                  "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                margin: "1px",
                maxWidth: "540px",
                minWidth: "326px",
                width: "100%",
              }}
            ></blockquote>
          </div>

          {/* Post 2 */}
          <div className="flex justify-center">
            <blockquote
              className="instagram-media"

              data-instgrm-permalink="https://www.instagram.com/reel/DNz2tty4q9t/?utm_source=ig_embed&utm_campaign=loading"
              data-instgrm-version="14"
              style={{
                background: "#FFF",
                border: 0,
                borderRadius: "3px",
                boxShadow:
                  "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                margin: "1px",
                maxWidth: "540px",
                minWidth: "326px",
                width: "100%",
              }}
            ></blockquote>
          </div>

          {/* Post 3 */}
          <div className="flex justify-center">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink="https://www.instagram.com/reel/DM-atVpTzKn/?utm_source=ig_embed&utm_campaign=loading"
              data-instgrm-version="14"
              style={{
                background: "#FFF",
                border: 0,
                borderRadius: "3px",
                boxShadow:
                  "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                margin: "1px",
                maxWidth: "540px",
                minWidth: "326px",
                width: "100%",
              }}
            ></blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaShowcase;
