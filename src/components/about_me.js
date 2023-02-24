import * as React from "react";
import {
	AppBar,
	Toolbar,
	Typography,
	Card,
	CardContent,
	Grid,
	Paper,
	Avatar,
	IconButton,
} from "@mui/material";
import { LinkedIn, Instagram } from "@mui/icons-material";
import { Container } from "@mui/system";
import { green } from "@mui/material/colors";
import pfp from "./pfp.jpg";

function AboutMe() {
	const navbar = () => {
		return (
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Welcome
					</Typography>
				</Toolbar>
			</AppBar>
		);
	};

	const bioCard = () => {
		return (
			<Container maxWidth="md" sx={{ marginTop: "20px"}}>
				<Card>
					<CardContent sx={{ backgroundColor: green[200] }}>
						<Grid item xs={12}>
							<Grid container justifyContent="space-around" spacing={4}>
								<Grid item md={4} >
									<Avatar
										alt="Howard Meng"
										src={pfp}
										sx={{ width: "100%", height: "100%" }}
									/>
								</Grid>
								<Grid item md={4}>
									<Typography variant="h5">Howard Meng</Typography>
									<Typography variant="body1">
										Bio: Hi there! This semester I am returning as senior mentor
										for 61B again! I am currently a third-year CS and Physics
										student, and I've been involved in CSM teaching for about 4
										semesters. I am interested in studying quantum many-body
										systems and quantum computing! But feel free to chat with me
										about anything!
									</Typography>
								</Grid>
								<Grid
									container
									md={4}
									alignItems="flex-end"
									justifyContent="flex-end"
                                    >
									<Grid item>
										<Typography variant="body1" align="right">
											LinkedIn:
											<IconButton component="label">
												<LinkedIn
													onClick={() =>
														window.open(
															"https://www.linkedin.com/in/bingxu-meng-4b03ba203/",
															"_self"
														)
													}
												/>
											</IconButton>
										</Typography>
										<Typography variant="body1" align="right">
											Instagram:
											<IconButton component="label">
												<Instagram
													onClick={() =>
														window.open(
															"https://www.instagram.com/bingxumeng/",
															"_self"
														)
													}
												/>
											</IconButton>
										</Typography>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</CardContent>
				</Card>
			</Container>
		);
	};

	return (
		<div>
			{navbar()}
			{bioCard()}
		</div>
	);
}

export default AboutMe;
