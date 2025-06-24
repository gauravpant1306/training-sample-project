import { Fragment } from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";
import { Box, Typography, LinearProgress, Button } from "@mui/material";

// Mock data for enrolled and recommended courses
const enrolledCourses = [
  {
    id: 1,
    title: "React for Beginners",
    progress: 70,
    instructor: "Jane Doe",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 2,
    title: "Python for Data Science",
    progress: 40,
    instructor: "Sara Kim",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80"
  }
];

const recommendedCourses = [
  {
    id: 3,
    title: "Advanced JavaScript",
    instructor: "John Smith",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 4,
    title: "UI/UX Design Essentials",
    instructor: "Emily Clark",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  }
];

const StatCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: "center",
  marginBottom: theme.spacing(3)
}));

const CourseCard = styled(Card)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2)
}));

const CourseImage = styled("img")({
  width: 80,
  height: 80,
  objectFit: "cover",
  borderRadius: 8,
  marginRight: 24
});

export default function Analytics() {
  // Example stats
  const stats = [
    { label: "Enrolled Courses", value: enrolledCourses.length },
    { label: "Completed Courses", value: 1 },
    { label: "In Progress", value: enrolledCourses.length - 1 }
  ];

  return (
    <Fragment>
      <Box sx={{ m: 4 }}>
        <Typography variant="h4" gutterBottom color="primary.main">
          My Dashboard
        </Typography>
        <Grid container spacing={3}>
          {/* Stats */}
          {stats.map((stat) => (
            <Grid item xs={12} sm={4} key={stat.label}>
              <StatCard>
                <Typography variant="h6" color="text.secondary">
                  {stat.label}
                </Typography>
                <Typography variant="h4" color="primary.main">
                  {stat.value}
                </Typography>
              </StatCard>
            </Grid>
          ))}
        </Grid>

        {/* Enrolled Courses */}
        <Box mt={5} mb={3}>
          <Typography variant="h5" gutterBottom color="secondary.main">
            Enrolled Courses
          </Typography>
          {enrolledCourses.length === 0 ? (
            <Typography color="text.secondary">You have not enrolled in any courses yet.</Typography>
          ) : (
            enrolledCourses.map((course) => (
              <CourseCard key={course.id}>
                <CourseImage src={course.image} alt={course.title} />
                <Box flex={1}>
                  <Typography variant="h6">{course.title}</Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Instructor: {course.instructor}
                  </Typography>
                  <LinearProgress variant="determinate" value={course.progress} sx={{ height: 8, borderRadius: 4, mb: 1 }} />
                  <Typography variant="caption" color="text.secondary">
                    Progress: {course.progress}%
                  </Typography>
                </Box>
                <Button variant="contained" color="primary" sx={{ ml: 2 }}>
                  Continue
                </Button>
              </CourseCard>
            ))
          )}
        </Box>

        {/* Recommended Courses */}
        <Box mt={5} mb={3}>
          <Typography variant="h5" gutterBottom color="secondary.main">
            Recommended Courses
          </Typography>
          <Grid container spacing={3}>
            {recommendedCourses.map((course) => (
              <Grid item xs={12} sm={6} md={4} key={course.id}>
                <Card sx={{ p: 2, textAlign: "center" }}>
                  <img src={course.image} alt={course.title} style={{ width: "100%", height: 120, objectFit: "cover", borderRadius: 8, marginBottom: 16 }} />
                  <Typography variant="h6">{course.title}</Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Instructor: {course.instructor}
                  </Typography>
                  <Button variant="outlined" color="primary" size="small">
                    View Course
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Fragment>
  );
}
