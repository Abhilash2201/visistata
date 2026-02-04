import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer
      className="py-8 px-6 text-gray-800"
      style={{
        background: "#f9fafb",
        borderTop: "1px solid #e5e7eb",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap gap-10">

        {/* Brand */}
        <div className="flex-1 min-w-[200px]">
          <h3
            className="text-xl font-semibold cursor-pointer"
            onClick={() => navigate("/")}
          >
            Visistata
          </h3>
          <p className="text-sm mt-3 text-gray-600">
            Visistata offers expert-led courses in software development and
            testing to help you land your next role in tech.
          </p>
        </div>

        {/* Courses */}
        <div className="flex-1 min-w-[150px]">
          <h4 className="font-semibold mb-2">Courses</h4>
          <p>Web Development</p>
          <p>MERN Full Stack</p>
          <p>Python Full Stack</p>
          <p>IOT & Smart Systems</p>
          <p>Drone Technology</p>
          <p>Career Development</p>
        </div>

        {/* Product */}
        <div className="flex-1 min-w-[150px]">
          <h4 className="font-semibold mb-2">Products</h4>
          <p>Artificial Intelligence</p>
          <p>Cyber Security</p>
          <p>SaaS</p>
        </div>

        {/* Services */}
        <div className="flex-1 min-w-[150px]">
          <h4 className="font-semibold mb-2">Training Services</h4>
          <p>College Training</p>
          <p>Corporate Training</p>
          <p>Internships & Projects</p>
          <p>Individual Training</p>
          <p>Hire from Us</p>
        </div>

        {/* Consulting */}
        <div className="flex-1 min-w-[180px]">
          <h4 className="font-semibold mb-2">Consulting Services</h4>
          <p>Technical Services</p>
          <p>Management Services</p>
          <p>Placement Services</p>
          <p>Legal Services</p>
          <p>GCC / Startup Mentorship</p>
        </div>

        {/* Company */}
        <div className="flex-1 min-w-[150px]">
          <h4 className="font-semibold mb-2">Company</h4>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Blog</p>
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
