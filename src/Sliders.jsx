import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import './index.css';

const Card = ({ children, className = "" }) => (
  <div className={`card ${className}`}>{children}</div>
);

const CardContent = ({ children }) => (
  <div className="card-content">{children}</div>
);

const Button = ({ children, className = "", onClick }) => (
  <button className={`button ${className}`} onClick={onClick}>
    {children}
  </button>
);

const testimonials = [
  { name: "John Doe", text: "This service is amazing! Highly recommended." },
  { name: "Jane Smith", text: "Fantastic experience, great customer support." },
  { name: "Robert Brown", text: "Best decision I ever made. Love it!" }
];

const contents = [
  { title: "Feature One", description: "Description of feature one." },
  { title: "Feature Two", description: "Description of feature two." },
  { title: "Feature Three", description: "Description of feature three." }
];

const Slider = ({ items, isTestimonial = false }) => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % items.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + items.length) % items.length);

  return (
    <div className="slider-container">
      <motion.div
        key={index}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <CardContent>
            {isTestimonial ? (
              <>
                <p className="testimonial-text">"{items[index].text}"</p>
                <p className="testimonial-name">- {items[index].name}</p>
              </>
            ) : (
              <>
                <h3 className="feature-title">{items[index].title}</h3>
                <p className="feature-description">{items[index].description}</p>
              </>
            )}
          </CardContent>
        </Card>
      </motion.div>

      <Button className="slider-button left" onClick={prevSlide}>
        <ChevronLeft size={32} />
      </Button>
      <Button className="slider-button right" onClick={nextSlide}>
        <ChevronRight size={32} />
      </Button>
    </div>
  );
};

export default function Sliders() {
  return (
    <div className="sliders">
      <h2 className="title">Testimonials</h2>
      <Slider items={testimonials} isTestimonial={true} />

      <h2 className="title">Our Features</h2>
      <Slider items={contents} isTestimonial={false} />
    </div>
  );
}
