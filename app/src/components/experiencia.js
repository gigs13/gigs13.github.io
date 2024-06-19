import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import { Fragment } from "react";

export default function Experiencia() {
  return (
    <Box>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
      >
        <List
          sx={{
            bgcolor: "background.paper",
            position: "relative",
            overflow: "auto",
            maxHeight: 700,
            "& ul": { padding: 0 },
          }}
          subheader={<li />}
        >
          <ListSubheader>
            <ListItem>
              <ListItemIcon></ListItemIcon>
              <ListItemText>
                <Typography variant="h4">Drop Climbing</Typography>
              </ListItemText>
            </ListItem>
          </ListSubheader>
          <ListItem>
            <ListItemText
              primary="Product Manager"
              secondary="Jan 2024 - Present"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="E commerce site for Drop Climbing physical store."
              secondary={
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.secondary"
                >
                  <ListItemText>
                    Monitor customer preferences to determine focus of sales
                    efforts.
                  </ListItemText>
                  <ListItemText>
                    Maintain up-to-date records of all products available on the
                    company's e-commerce site.
                  </ListItemText>
                  <ListItemText>
                    Development of the backend site in python with Django REST
                    framework. Storefront development with React and GraphQL.
                  </ListItemText>
                </Typography>
              }
            />
          </ListItem>
          <ListSubheader>
            <ListItem>
              <ListItemIcon></ListItemIcon>
              <ListItemText>
                <Typography variant="h4">Santander</Typography>
              </ListItemText>
            </ListItem>
          </ListSubheader>
          <ListItem>
            <ListItemText primary="Team Lead" secondary="Jun 2021 - Jul 2023" />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Santander Web - New web channel for Santander Bank end-users."
              secondary={
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.secondary"
                >
                  <ListItemText>
                    Agile facilitator at squad level, enabler of the
                    productivity of the team that created the product.
                  </ListItemText>
                  <ListItemText>
                    Manager of the primary user website for the electronic
                    banking platform.
                  </ListItemText>
                  <ListItemText>
                    Frontend developed in Typescript with Angular Framework. API
                    developed in JAVA.
                  </ListItemText>
                </Typography>
              }
            />
          </ListItem>
          <ListSubheader>
            <ListItem>
              <ListItemIcon></ListItemIcon>
              <ListItemText>
                <Typography variant="h4">Grupo Abraxas</Typography>
              </ListItemText>
            </ListItem>
          </ListSubheader>
          <ListItem>
            <ListItemText
              primary="Scrum Master"
              secondary="May 2019 - Abr 2021"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Bimbo — Maptiq."
              secondary={
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.secondary"
                >
                  <ListItemText>
                    Commercial Intelligent Map, that enabled the overview of
                    points of sale within Mexico City, Lima and São Paulo.
                  </ListItemText>
                  <ListItemText>
                    Accountable for removing impediments of the team to achieve
                    the sprint goals/deliverables.
                  </ListItemText>
                  <ListItemText>
                    Frontend developed in Javascript with React. Backend
                    developed in python with Django REST framework.
                  </ListItemText>
                </Typography>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Fullstack Developer"
              secondary="Dec 2018 - Abr 2019"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Price Optimization Web-app for Cinepolis & Bimbo Canada"
              secondary={
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.secondary"
                >
                  <ListItemText>
                    Web portal that enabled the overview of dynamic prices at
                    granular level.
                  </ListItemText>
                  <ListItemText>
                    Developer and supervisor of the web portal.
                  </ListItemText>
                  <ListItemText>
                    Enabled the data visualization through graphics such as
                    D3.js libraries and React development, interacting with an
                    API developed with Python Django REST framework.
                  </ListItemText>
                </Typography>
              }
            />
          </ListItem>
          <ListSubheader>
            <ListItem>
              <ListItemIcon></ListItemIcon>
              <ListItemText>
                <Typography variant="h4">freelancer.mx</Typography>
              </ListItemText>
            </ListItem>
          </ListSubheader>
          <ListItem>
            <ListItemText
              primary="Frontend Developer"
              secondary="May 2017 - Nov 2018"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="PepsiCo - Cars II"
              secondary={
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.secondary"
                >
                  <ListItemText>
                    Tool development phase, for the management of cars in the
                    company.
                  </ListItemText>
                  <ListItemText>
                    Developed in JAVA using Spring as a data manipulation
                    framework.
                  </ListItemText>
                </Typography>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Phillip Morris - Carreer Journey."
              secondary={
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.secondary"
                >
                  <ListItemText>
                    Web tool that allows the wide selection of a professional
                    career for the employee within the company.
                  </ListItemText>
                  <ListItemText>
                    Developed in HTML5 using Bootstrap 4.1. x and Jquery 3.3. x
                    using as a base SharePoint information through its custom
                    lists.
                  </ListItemText>
                </Typography>
              }
            />
          </ListItem>
          <ListSubheader>
            <ListItem>
              <ListItemIcon></ListItemIcon>
              <ListItemText>
                <Typography variant="h4">POSiBLE Mexico</Typography>
              </ListItemText>
            </ListItem>
          </ListSubheader>
          <ListItem>
            <ListItemText
              primary="Product Manager Jr"
              secondary="Nov 2016 - Aug 2017"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={
                <Typography>
                  <i>posibleplus.mx</i> & <i>posiblylynx.com</i> - Platforms
                  tool for entrepreneurs
                </Typography>
              }
              secondary={
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.secondary"
                >
                  <ListItemText>
                    Posible Plus being a MOOC and Posible Lynx a site of job
                    offers for entrepreneurs.
                  </ListItemText>
                  <ListItemText>
                    Both platforms were addressed with their two perspectives
                    which involved the creation of a new development, and its
                    marketing in the product target.
                  </ListItemText>
                  <ListItemText>
                    Led a team consisting of three technical people who
                    contributed to the construction and development of the new
                    site as well as their maintenance.
                  </ListItemText>
                  <ListItemText>
                    Developed in HTML5 using SASS technologies in a Ruby on
                    Rails framework.
                  </ListItemText>
                </Typography>
              }
            />
          </ListItem>
          <ListSubheader>
            <ListItem>
              <ListItemIcon></ListItemIcon>
              <ListItemText>
                <Typography variant="h4">Intellego SA de CV</Typography>
              </ListItemText>
            </ListItem>
          </ListSubheader>
          <ListItem>
            <ListItemText
              primary="Systems Analyst Consultant"
              secondary="Abr 2016 - Oct 2016"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={
                <Typography>
                  Trainee Program - Enabled communication and data storage for{" "}
                  <b>Ann Taylor</b> and <b>Walmart</b>.
                </Typography>
              }
              secondary={
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.secondary"
                >
                  <ListItemText>
                    Worked in a four-person team, creating skills in Information
                    Management, such as: Data analysis, DataBase backup and
                    recovery. Data-Marts model creation and design, Database
                    monitoring, Capacity planning, performance and database
                    security. Thus providing better views of data analytics for
                    management projects.
                  </ListItemText>
                </Typography>
              }
            />
          </ListItem>
          <ListSubheader>
            <ListItem>
              <ListItemIcon></ListItemIcon>
              <ListItemText>
                <Typography variant="h4">INTRAVI SA de CV</Typography>
              </ListItemText>
            </ListItem>
          </ListSubheader>
          <ListItem>
            <ListItemText
              primary="Social Service"
              secondary="Oct 2015 - Abr 2016"
            />
          </ListItem>
          <ListItem className="experience-description">
            <ListItemText
              primary="CACERP - Trend behavioral research based on personal
                characteristics."
              secondary={
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.secondary"
                >
                  <ListItemText>
                    Developer of Web site that helped diagnose behavioral trends
                    on the customer.
                  </ListItemText>
                  <ListItemText>
                    Contributing to the research of Leadership and Conflict
                    Management courses.
                  </ListItemText>
                  <ListItemText>
                    Web site developed in HTML5 using various technologies such
                    as XML, DOM, JavaScript, JQuery. Hosting with the help of
                    PHP and MySQL.
                  </ListItemText>
                </Typography>
              }
            />
          </ListItem>
          <ListSubheader>
            <ListItem>
              <ListItemIcon></ListItemIcon>
              <ListItemText>
                <Typography variant="h4">Robert Bosch GmbH</Typography>
              </ListItemText>
            </ListItem>
          </ListSubheader>
          <ListItem>
            <ListItemText
              primary="Student Internship"
              secondary="Feb 2015 - Sep 2015"
            />
          </ListItem>
          <ListItem className="experience-description">
            <ListItemText
              primary="MMF - Mass Maintenance Format"
              secondary={
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.secondary"
                >
                  <ListItemText>
                    Automatized processes in the area of HR-IT for loads in SAP
                    R/3 Human Resources.
                  </ListItemText>
                  <ListItemText>
                    Creation and modification of positions, as well as
                    organizational units in the business.
                  </ListItemText>
                  <ListItemText>
                    Management of the process of recruitment in the Trainee
                    Program.
                  </ListItemText>
                  <ListItemText>
                    Project programmed with development tools such as VBA, C/C++
                    and Visual Basic.
                  </ListItemText>
                </Typography>
              }
            />
          </ListItem>
          <ListSubheader>
            <ListItem>
              <ListItemIcon></ListItemIcon>
              <ListItemText>
                <Typography variant="h4">
                  Computer Laboratory of the Faculty of Engineering, La Salle
                  University
                </Typography>
              </ListItemText>
            </ListItem>
          </ListSubheader>
          <ListItem>
            <ListItemText
              primary="Programmer"
              secondary="Abr 2013 - May 2014"
            />
          </ListItem>
          <ListItem className="experience-description">
            <ListItemText
              primary="PRAFI - Planning of Administrative Resources of the Faculty of
            Engineering"
              secondary={
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.secondary"
                >
                  <ListItemText>
                    Enabled control and securing of resources in the
                    administration of the Engineering Faculty.
                  </ListItemText>
                  <ListItemText>
                    The software was developed in direct communication with the
                    main office, which assured its success.
                  </ListItemText>
                  <ListItemText>
                    Site developed in C# and .NET. As well as implementations
                    within HTML code, such as Javascript and AJAX.
                  </ListItemText>
                </Typography>
              }
            />
          </ListItem>
        </List>
      </Grid>
    </Box>
  );
}
