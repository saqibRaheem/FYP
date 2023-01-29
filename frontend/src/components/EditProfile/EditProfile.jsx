import React, { useState, useEffect } from "react";
import "./EditProfile.scss";
import { Field, Form, Formik } from "formik";
import TextField from "../TextField/TextField";
import SelectField from "../SelectField/SelectField";
import TextArea from "../TextArea/TextArea";
import Button from "../Buttons/Button";
import TextEditor from "../Editor/Editor";
import {
  editProfileValidation,
  editComProfileValidation,
} from "../../validations/validation";
import { useSelector } from "react-redux";
import { editprofile, editcomprofile } from "../../Lib/User.helper";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import { EditorState, convertToRaw, ContentState } from "draft-js";

export default function EditProfile() {
  const user = useSelector((state) => state.status.user);
  const role = useSelector((state) => state.status.role);

  const [loading, setLoading] = useState(false);
  const [gender, setGender] = useState(user.gender ? user.gender : "");
  const [employeesno, setEmployeesno] = useState(
    user.employeesno ? user.employeesno : ""
  );
  const [category, setCategory] = useState(user.category ? user.category : "");
  const [workingtime, setworkingtime] = useState(
    user.workingtime ? user.workingtime : ""
  );

  const [tworkingexp, setTworkingexp] = useState(
    user.tworkingexp ? user.tworkingexp : ""
  );
  const [education, setEducation] = useState(
    user.education ? user.education : ""
  );

  const [degree_program, setDegree_program] = useState(
    user.degree_program ? user.degree_program : ""
  );

  // const html = JSON.parse(
  //   user.work_exp ? user.work_exp : user.aboutcompany ? user.aboutcompany : ""
  // );
  // const contentBlock = htmlToDraft(html);

  // const contentState = ContentState.createFromBlockArray(
  //   contentBlock.contentBlocks
  // );

  // const [editorState, setEditorState] = useState(() => {
  //   if (user.work_exp || user.aboutcompany) {
  //     EditorState.createWithContent(contentState);
  //   } else {
  //     EditorState.createEmpty();
  //   }
  // });
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const genderOpt = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];
  const educationOpt = [
    { value: "Graduation", label: "Graduation" },
    { value: "Masters", label: "Masters" },
    { value: "PHD", label: "PHD" },
    { value: "Mphil", label: "MPhil" },
  ];
  const degreeOpt = [
    { value: "Computer Science", label: "Computer Science" },
    { value: "BBA", label: "BBA" },
    { value: "DPT", label: "DPT" },
    { value: "Food Science", label: "Food Science" },
  ];
  const tworkingOpt = [
    { value: "0", label: "0" },
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5+", label: "5+" },
  ];

  const employeesnoopt = [
    { value: "1-50", label: "1-50" },
    { value: "50-100", label: "50-100" },
    { value: "100-150", label: "100-150" },
    { value: "150-200", label: "150-200" },
    { value: "200+", label: "200+" },
  ];

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

  const workingtimeopt = [
    { value: "09:00AM To 5:00PM", label: "09:00AM To 5:00PM" },
    { value: "5:00PM To 12:AM", label: "5:00PM To 12:AM" },
    { value: "10:00PM To 7:00AM", label: "10:00PM To 7:00AM" },
  ];

  return (
    <div className="edit-profile-main">
      <div className="edit-profile">
        <h2>Edit Profile</h2>
        <Formik
          initialValues={{
            firstname: user.firstname ? user.firstname : "",
            lastname: user.lastname ? user.lastname : "",
            email: user.email ? user.email : "",
            phone: user.phone ? user.phone : "",
            facebook: user.facebook ? user.facebook : "",
            linkedin: user.linkedin ? user.linkedin : "",
            google: user.google ? user.google : "",
            twitter: user.twitter ? user.twitter : "",
            date: user.dob ? user.dob : "",
            professionaltitle: user.professionaltitle
              ? user.professionaltitle
              : "",
            address: user.address ? user.address : "",
            school_educ: user.school_educ ? user.school_educ : "",
            inter_educ: user.inter_educ ? user.inter_educ : "",
            bio: user.bio ? user.bio : "",
            age: user.age ? user.age : "",
            cgpa: user.cgpa ? user.cgpa : "",
            mgrade: user.mgrade ? user.mgrade : "",
            igrade: user.igrade ? user.igrade : "",
            skills: user.skills ? user.skills : "",
            stdId: user.stdId ? user.stdId : "",
            companyname: user.companyname ? user.companyname : "",
            ownername: user.ownername ? user.ownername : "",
            tagline: user.tagline ? user.tagline : "",
            website: user.website ? user.website : "",
          }}
          validationSchema={
            role === "student"
              ? editProfileValidation
              : editComProfileValidation
          }
          onSubmit={(values, resetForm) => {
            role === "student"
              ? editprofile(
                  values,
                  setLoading,
                  resetForm,
                  user._id,
                  gender,
                  education,
                  degree_program,
                  tworkingexp,
                  editorState,
                  draftToHtml,
                  convertToRaw
                )
              : editcomprofile(
                  values,
                  setLoading,
                  resetForm,
                  user._id,
                  editorState,
                  employeesno,
                  category,
                  workingtime,
                  draftToHtml,
                  convertToRaw
                );
          }}
        >
          <Form>
            {role === "student" ? (
              <>
                <div className="edit-profile-form">
                  <TextField
                    label="First Name"
                    name="firstname"
                    type="text"
                    placeholder="First Name"
                  />
                </div>
                <div className="edit-profile-form">
                  <TextField
                    label="Last Name"
                    name="lastname"
                    type="text"
                    placeholder="last Name"
                  />
                </div>
                <div className="edit-profile-form">
                  <TextField
                    label="Student ID"
                    name="stdId"
                    type="text"
                    placeholder="ID"
                  />
                </div>
                <div className="edit-profile-form">
                  <TextField
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="Enter Email Address"
                  />
                </div>
                <div className="edit-profile-form">
                  <TextField
                    label="Phone Number"
                    name="phone"
                    type="number"
                    placeholder="Enter Phone Number"
                  />
                </div>
                <div className="edit-profile-form">
                  <TextField label="Date of Birth" name="date" type="date" />
                </div>
                <div className="edit-profile-form">
                  <TextField
                    label="Professional Title"
                    name="professionaltitle"
                    type="text"
                    placeholder="World Most Popular Web Development"
                  />
                </div>
                <div className="edit-profile-form">
                  <TextField
                    label="Address"
                    name="address"
                    type="text"
                    placeholder="Address"
                  />
                </div>
                <div className="edit-profile-form">
                  <TextField
                    label="Age"
                    name="age"
                    type="number"
                    placeholder="Age"
                  />
                </div>
                <div className="edit-profile-form">
                  <TextField
                    label="School Education"
                    name="school_educ"
                    type="text"
                    placeholder="School Name e.g Dadabhoy Institute of Higher Education"
                  />
                </div>
                <div className="edit-profile-form">
                  <TextField
                    label="Intermidiate Education"
                    name="inter_educ"
                    type="text"
                    placeholder="College Name e.g Dadabhoy Institute of Higher Education"
                  />
                </div>
                <div className="edit-profile-form-select">
                  <SelectField
                    customClass="select-field"
                    label="Gender"
                    placeholder="Select Your Gender"
                    onChange={(e) => setGender(e.value)}
                    options={genderOpt}
                    value={genderOpt.filter(
                      (option) => option.label === gender
                    )}
                  />
                </div>
                <div className="edit-profile-form-select">
                  <SelectField
                    customClass="select-field"
                    label="Education"
                    placeholder="Select Your Education"
                    onChange={(e) => setEducation(e.value)}
                    options={educationOpt}
                    value={educationOpt.filter(
                      (option) => option.label === education
                    )}
                  />
                </div>
                <div className="edit-profile-form-select">
                  <SelectField
                    customClass="select-field"
                    label="Degree Program"
                    placeholder="Select Your Degree Program"
                    onChange={(e) => setDegree_program(e.value)}
                    options={degreeOpt}
                    value={degreeOpt.filter(
                      (option) => option.label === degree_program
                    )}
                  />
                </div>
                <div className="edit-profile-form">
                  <TextField
                    label="Matric grade"
                    name="mgrade"
                    type="text"
                    placeholder="Enter Matric grade"
                  />
                </div>
                <div className="edit-profile-form">
                  <TextField
                    label="Inter grade"
                    name="igrade"
                    type="text"
                    placeholder="Enter Inter grade"
                  />
                </div>
                <div className="edit-profile-form">
                  <TextField
                    label="CGPA"
                    name="cgpa"
                    type="number"
                    placeholder="Enter CGPA"
                  />
                </div>
                <div className="edit-profile-form">
                  <TextArea label="Bio" name="bio" type="text" />
                </div>
                <div className="edit-profile-form">
                  <TextField
                    label="Skills(Seperate with Comma)"
                    name="skills"
                    type="text"
                    placeholder="Skills"
                  />
                </div>
                <div className="edit-profile-form-select">
                  <SelectField
                    customClass="select-field"
                    label="Total Work Experience"
                    placeholder="Select total working experience"
                    onChange={(e) => setTworkingexp(e.value)}
                    options={tworkingOpt}
                    value={tworkingOpt.filter(
                      (option) => option.label === tworkingexp
                    )}
                  />
                </div>
              </>
            ) : (
              <>
                <div className="edit-profile-form">
                  <TextField
                    label="Company Name"
                    name="companyname"
                    type="text"
                    placeholder="Enter your company name"
                  />
                </div>
                <div className="edit-profile-form">
                  <TextField
                    label="Owner name"
                    name="ownername"
                    type="text"
                    placeholder="Enter Owner or CEO name"
                  />
                </div>
                <div className="edit-profile-form">
                  <TextField
                    label="Tagline"
                    name="tagline"
                    type="text"
                    placeholder="Enter company tagline"
                  />
                </div>
                <div className="edit-profile-form">
                  <TextField
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="Enter Email Address"
                  />
                </div>

                <div className="edit-profile-form">
                  <TextField
                    label="Established date"
                    name="date"
                    type="date"
                    placeholder="Choose Company established date"
                  />
                </div>
                <div className="edit-profile-form-select">
                  <SelectField
                    customClass="select-field"
                    label="Company category"
                    placeholder="Select company category"
                    onChange={(e) => setCategory(e.value)}
                    options={categoryopt}
                    value={categoryopt.filter(
                      (option) => option.label === category
                    )}
                  />
                </div>
                <div className="edit-profile-form-select">
                  <SelectField
                    customClass="select-field"
                    label="No of Employees"
                    placeholder="Select No of employees"
                    onChange={(e) => setEmployeesno(e.value)}
                    options={employeesnoopt}
                    value={employeesnoopt.filter(
                      (option) => option.label === employeesno
                    )}
                  />
                </div>
                <div className="edit-profile-form">
                  <TextField
                    label="Phone Number"
                    name="phone"
                    type="number"
                    placeholder="Enter Phone Number"
                  />
                </div>
                <div className="edit-profile-form-select">
                  <SelectField
                    customClass="select-field"
                    label="Woking time"
                    placeholder="Select woking time"
                    onChange={(e) => setworkingtime(e.value)}
                    options={workingtimeopt}
                    value={workingtimeopt.filter(
                      (option) => option.label === workingtime
                    )}
                  />
                </div>
                <div className="edit-profile-form">
                  <TextField
                    label="Website link"
                    name="website"
                    type="text"
                    placeholder="Enter your website link"
                  />
                </div>
                <div className="edit-profile-form">
                  <TextField
                    label="Address"
                    name="address"
                    type="text"
                    placeholder="Address"
                  />
                </div>
              </>
            )}
            <div>
              <label>
                {role === "student" ? "Experience Detail" : "About Company"}
              </label>
              <TextEditor
                placeholder={
                  role === "student"
                    ? "Enter Your Job experience"
                    : "Enter summary about company"
                }
                editorState={editorState}
                onEditorStateChange={setEditorState}
              />
            </div>
            <div className="edit-profile-form">
              <TextField
                label="Facebook"
                name="facebook"
                type="text"
                placeholder="https://facebook.com/"
              />
              <TextField
                label="Twitter"
                name="twitter"
                type="text"
                placeholder="https://twitter.com/"
              />
            </div>
            <div className="edit-profile-form">
              <TextField
                label="Linkedin"
                name="linkedin"
                type="text"
                placeholder="https://linkedin.com/"
              />
              <TextField
                label="Google+"
                name="google"
                type="text"
                placeholder="https://google.com/"
              />
            </div>

            <Button
              text="save changes"
              type="submit"
              loading={loading}
              fullwidth
            />
          </Form>
        </Formik>
      </div>
    </div>
  );
}
