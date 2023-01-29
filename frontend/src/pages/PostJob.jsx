import Textfield from "../components/TextField/TextField";
import TextEditor from "./../components/Editor/Editor";
import Grid from "@mui/material/Grid";
import Buttons from "../components/Buttons/Button";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { postjobvalidation } from "../validations/validation";
import SelectField from "../components/SelectField/SelectField";
import { postJob } from "../Lib/User.helper";
import "./Pages.scss";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { EditorState } from "draft-js";

const PostJob = () => {
  const user = useSelector((state) => state.status.user);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("");
  const [education, setEducation] = useState("");
  const [tworkingexp, setTworkingexp] = useState("");
  const [jobType, setJobtype] = useState("");
  const history = useHistory();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const categoryopt = [
    { value: "Food and Beverages", label: "Food and Beverages" },
    {
      value: "IT and Communications Technology",
      label: "IT and Communications Technology",
    },
    { value: "Crafts and fancy goods", label: "Crafts and fancy goods" },
    { value: "Building", label: "Building" },
    { value: "Publishing and printing", label: "Publishing and printing" },
    { value: "Energy", label: "Energy" },
    { value: "Industrial manufacturing", label: "Industrial manufacturing" },
    { value: "Services", label: "Services" },
    { value: "Sport and Wellbeing", label: "Sport and Wellbeing" },
  ];
  const educationOpt = [
    { value: "Graduation", label: "Graduation" },
    { value: "Masters", label: "Masters" },
    { value: "PHD", label: "PHD" },
    { value: "Mphil", label: "MPhil" },
  ];
  const tworkingOpt = [
    { value: "0", label: "0" },
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5+", label: "5+" },
  ];
  const jobtype = [
    { value: "Fulltime", label: "Fulltime" },
    { value: "Parttime", label: "Parttime" },
    { value: "Internship", label: "Internship" },
  ];
  return (
    <div className="postjob">
      <div className="postjob_cont">
        <Formik
          initialValues={{
            title: "",
            category: "",
            noVacancy: "",
            description: "",
            salaryRange: "",
            skills: "",
            experience: "",
            qualification: "",
            responsilities: "",
            jobtype: "",
          }}
          // validationSchema={postjobvalidation}
          onSubmit={(values, resetForm) => {
            postJob(
              values,
              user.companyname,
              user.profilePic,
              user.email,
              user.address,
              user.website,
              user.phone,
              user._id,
              tworkingexp,
              education,
              jobType,
              editorState,
              resetForm,
              setLoading,
              category
            );
          }}
        >
          <Form>
            <Grid container>
              <Grid item xs={12}>
                <div className="main-head">
                  <h3>General Information</h3>
                </div>
              </Grid>
            </Grid>
            <Grid container spacing={3} className="postjob-form">
              <Grid item xs={12}>
                <div className="edit-profile-form">
                  <Textfield
                    label="Job Title"
                    name="title"
                    type="text"
                    placeholder="Enter Job title"
                  />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className="edit-profile-form">
                  <Textfield
                    label="Description"
                    name="description"
                    type="text"
                    placeholder="Enter description"
                  />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className="edit-profile-form">
                  <Textfield
                    label="No of Vacancy"
                    name="noVacancy"
                    type="number"
                    placeholder="Enter no of vacancy"
                  />
                </div>
              </Grid>
            </Grid>
            <Grid container spacing={3} className="postjob-form">
              <Grid item xs={12}>
                <div className="edit-profile-form">
                  <div>
                    <SelectField
                      customClass="select-field"
                      label="Company category"
                      name="category"
                      placeholder="Select company category"
                      onChange={(e) => setCategory(e.value)}
                      options={categoryopt}
                      value={categoryopt.filter(
                        (option) => option.label === category
                      )}
                    />
                  </div>
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className="edit-profile-form">
                  <Textfield
                    label="Salary range"
                    name="salaryRange"
                    type="number"
                    placeholder="Enter salary range"
                  />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className="edit-profile-form">
                  <Textfield
                    label="Skills (seperate with comma)"
                    name="skills"
                    type="text"
                    placeholder="Enter skills"
                  />
                </div>
              </Grid>
            </Grid>

            <Grid container spacing={3} className="postjob-form">
              <Grid item xs={12}>
                <div className="edit-profile-form">
                  <SelectField
                    customClass="select-field"
                    label="Jobtype"
                    name="jobtype"
                    placeholder="Select Jotype"
                    onChange={(e) => setJobtype(e.value)}
                    options={jobtype}
                    value={jobtype.filter((option) => option.label === jobType)}
                  />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className="edit-profile-form">
                  <SelectField
                    customClass="select-field"
                    label="Experience"
                    name="experience"
                    placeholder="Select working experience"
                    onChange={(e) => setTworkingexp(e.value)}
                    options={tworkingOpt}
                    value={tworkingOpt.filter(
                      (option) => option.label === tworkingexp
                    )}
                  />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className="edit-profile-form">
                  <SelectField
                    customClass="select-field"
                    label="Qualification"
                    name="qualification"
                    placeholder="Select Your Qualification"
                    onChange={(e) => setEducation(e.value)}
                    options={educationOpt}
                    value={educationOpt.filter(
                      (option) => option.label === education
                    )}
                  />
                </div>
              </Grid>
            </Grid>
            <Grid container spacing={3} className="postjob-form">
              <Grid item xs={12}>
                <h4>Responsibilities</h4>
                <TextEditor
                  placeholder={"Enter Job Responsibilities"}
                  editorState={editorState}
                  onEditorStateChange={setEditorState}
                />
              </Grid>
            </Grid>
            <div className="postjob-btn-cont">
              <Buttons
                text="Post Job"
                type="submit"
                loading={loading}
                fullwidth
              />
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
export default PostJob;
