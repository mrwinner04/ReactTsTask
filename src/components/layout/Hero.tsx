import React from "react";
import { useAuth } from "../../hooks/useAuth";
import "./Hero.css";

/**
 * Hero Layout Component
 */
const Hero: React.FC = () => {
  const { user } = useAuth();

  return (
    <section className="hero">
      <h3 className="hero__title">Welcome {user?.name || "Martin"}</h3>
      <p className="hero__description">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, qui.
        Eveniet eum, facere ex fugiat deleniti.
      </p>
    </section>
  );
};

export default Hero;
