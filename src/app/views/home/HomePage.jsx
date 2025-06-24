import React from "react";
import { Box, Typography, Button, Container, Grid, Card, CardMedia, CardContent, CardActions } from "@mui/material";
import { useNavigate } from "react-router-dom";

// Mock course data with online images
const courses = [
  {
    id: 1,
    title: "React for Beginners",
    instructor: "Jane Doe",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    price: 0,
    description: "Learn the basics of React and start building interactive UIs.",
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    instructor: "John Smith",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    price: 49.99,
    description: "Deep dive into modern JavaScript features and best practices.",
  },
  {
    id: 3,
    title: "UI/UX Design Essentials",
    instructor: "Emily Clark",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    price: 0,
    description: "Master the fundamentals of user interface and user experience design.",
  },
  {
    id: 4,
    title: "Fullstack Web Development",
    instructor: "Michael Lee",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    price: 79.99,
    description: "Become a fullstack developer with hands-on projects.",
  },
  {
    id: 5,
    title: "Python for Data Science",
    instructor: "Sara Kim",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
    price: 0,
    description: "Analyze data and build ML models using Python.",
  },
  {
    id: 6,
    title: "Machine Learning Bootcamp",
    instructor: "Alex Turner",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    price: 99.99,
    description: "Comprehensive bootcamp to get you started with ML algorithms.",
  },
];

export default function HomePage() {
  const navigate = useNavigate();
  const freeCourses = courses.filter((c) => c.price === 0);
  const paidCourses = courses.filter((c) => c.price > 0);

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box textAlign="center" mb={6}>
        <Typography variant="h2" component="h1" gutterBottom color="primary.main">
          Welcome to EduPlatform
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Your modern e-learning platform. Explore free and paid courses, track your progress, and achieve your learning goals with us!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 2, mr: 2 }}
          onClick={() => navigate("/dashboard/default")}
        >
          Go to Dashboard
        </Button>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          sx={{ mt: 2 }}
          onClick={() => navigate("/session/signin")}
        >
          Sign In
        </Button>
      </Box>

      {/* Free Courses Section */}
      <Box mb={6}>
        <Typography variant="h4" component="h2" gutterBottom color="secondary.main">
          Free Courses
        </Typography>
        <Grid container spacing={4}>
          {freeCourses.map((course) => (
            <Grid item xs={12} sm={6} md={4} key={course.id}>
              <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <CardMedia
                  component="img"
                  height="180"
                  image={course.image}
                  alt={course.title}
                  sx={{ objectFit: "cover" }}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>{course.title}</Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {course.description}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    Instructor: {course.instructor}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" onClick={() => navigate("/session/signin")}>Enroll Free</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Paid Courses Section */}
      <Box mb={6}>
        <Typography variant="h4" component="h2" gutterBottom color="secondary.main">
          Paid Courses
        </Typography>
        <Grid container spacing={4}>
          {paidCourses.map((course) => (
            <Grid item xs={12} sm={6} md={4} key={course.id}>
              <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <CardMedia
                  component="img"
                  height="180"
                  image={course.image}
                  alt={course.title}
                  sx={{ objectFit: "cover" }}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>{course.title}</Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {course.description}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    Instructor: {course.instructor}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Typography variant="subtitle1" color="primary" sx={{ flexGrow: 1 }}>
                    ${course.price}
                  </Typography>
                  <Button size="small" color="primary" variant="contained" onClick={() => navigate("/session/signin")}>Buy Now</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
} 