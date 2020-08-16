CREATE TABLE "Day" (
  "id" serial PRIMARY KEY,
  "date" date UNIQUE NOT NULL,
  "reportId" integer,
  "createdAt" date,
  "updatedAt" date
);

CREATE TABLE "Report_Item" (
  "prompt" text PRIMARY KEY,
  "promptType" integer,
  "itemType" integer,
  "createdAt" date,
  "updatedAt" date
);

CREATE TABLE "Report_Item_Response" (
  "id" serial PRIMARY KEY,
  "textVal" text,
  "numVal" integer,
  "createdAt" date,
  "updatedAt" date
);

CREATE TABLE "Objective" (
  "id" serial PRIMARY KEY,
  "description" text,
  "createdAt" date,
  "updatedAt" date
);

CREATE TABLE "Person" (
  "id" serial PRIMARY KEY,
  "firstName" text,
  "lastName" text,
  "github" integer,
  "linkedIn" integer,
  "pronoun" text,
  "createdAt" date,
  "updatedAt" date
);

CREATE TABLE "Notecard" (
  "id" serial PRIMARY KEY,
  "type" text,
  "front" text,
  "back" text,
  "createdAt" date,
  "updatedAt" date
);

CREATE TABLE "Picture" (
  "id" serial PRIMARY KEY,
  "filePath" text,
  "createdAt" date,
  "updatedAt" date
);

CREATE TABLE "Tag" (
  "tag" text PRIMARY KEY,
  "createdAt" date,
  "updatedAt" date
);

CREATE TABLE "Email" (
  "email" text PRIMARY KEY,
  "createdAt" date,
  "updatedAt" date
);

CREATE TABLE "Key" (
  "id" serial PRIMARY KEY,
  "key" text,
  "val" text,
  "createdAt" date,
  "updatedAt" date
);

CREATE TABLE "Github_Profile" (
  "id" serial PRIMARY KEY,
  "url" text,
  "createdAt" date,
  "updatedAt" date
);

CREATE TABLE "LinkedIn_Profile" (
  "id" serial PRIMARY KEY,
  "url" text,
  "createdAt" date,
  "updatedAt" date
);

CREATE TABLE "Day_Objective" (
  "id" serial PRIMARY KEY,
  "dayId" integer,
  "objectiveId" integer,
  "createdAt" date,
  "updatedAt" date
);

CREATE TABLE "Day_Partner" (
  "id" serial PRIMARY KEY,
  "dayId" integer,
  "personId" integer,
  "createdAt" date,
  "updatedAt" date
);

CREATE TABLE "Report" (
  "id" serial PRIMARY KEY,
  "responseId" integer,
  "createdAt" date,
  "updatedAt" date
);

CREATE TABLE "Report_Response" (
  "id" serial PRIMARY KEY,
  "itemId" integer,
  "responseId" integer,
  "createdAt" date,
  "updatedAt" date
);

CREATE TABLE "Objective_Notecard" (
  "id" serial PRIMARY KEY,
  "objectiveId" integer,
  "notecardId" integer,
  "createdAt" date,
  "updatedAt" date
);

CREATE TABLE "Notecard_Tag" (
  "id" serial PRIMARY KEY,
  "notecardId" integer,
  "tag" text,
  "createdAt" date,
  "updatedAt" date
);

CREATE TABLE "Objective_Tag" (
  "id" serial PRIMARY KEY,
  "objectiveId" integer,
  "tag" text,
  "createdAt" date,
  "updatedAt" date
);

CREATE TABLE "Notecard_Picture" (
  "id" serial PRIMARY KEY,
  "notecardId" integer,
  "pictureId" integer,
  "createdAt" date,
  "updatedAt" date
);

CREATE TABLE "Person_Picture" (
  "id" serial PRIMARY KEY,
  "personId" integer,
  "pictureId" integer,
  "createdAt" date,
  "updatedAt" date
);

CREATE TABLE "Person_Email" (
  "id" serial PRIMARY KEY,
  "personId" integer,
  "email" text,
  "createdAt" date,
  "updatedAt" date
);

CREATE TABLE "Report_Prompt_Type" (
  "id" serial PRIMARY KEY,
  "isAskingAboutWho" text,
  "isAskingAboutWhat" text,
  "createdAt" date,
  "updatedAt" date
);

CREATE TABLE "Report_Item_Type" (
  "type" text PRIMARY KEY,
  "createdAt" date,
  "updatedAt" date
);

CREATE TABLE "Notecard_Type" (
  "type" text PRIMARY KEY,
  "createdAt" date,
  "updatedAt" date
);

CREATE TABLE "Pronoun" (
  "pronoun" text PRIMARY KEY,
  "createdAt" date,
  "updatedAt" date
);

ALTER TABLE "Day" ADD FOREIGN KEY ("reportId") REFERENCES "Report" ("id");

ALTER TABLE "Report_Item" ADD FOREIGN KEY ("promptType") REFERENCES "Report_Prompt_Type" ("id");

ALTER TABLE "Report_Item" ADD FOREIGN KEY ("itemType") REFERENCES "Report_Item_Type" ("type");

ALTER TABLE "Person" ADD FOREIGN KEY ("github") REFERENCES "Github_Profile" ("id");

ALTER TABLE "Person" ADD FOREIGN KEY ("linkedIn") REFERENCES "LinkedIn_Profile" ("id");

ALTER TABLE "Person" ADD FOREIGN KEY ("pronoun") REFERENCES "Pronoun" ("pronoun");

ALTER TABLE "Notecard" ADD FOREIGN KEY ("type") REFERENCES "Notecard_Type" ("type");

ALTER TABLE "Day_Objective" ADD FOREIGN KEY ("dayId") REFERENCES "Day" ("id");

ALTER TABLE "Day_Objective" ADD FOREIGN KEY ("objectiveId") REFERENCES "Objective" ("id");

ALTER TABLE "Day_Partner" ADD FOREIGN KEY ("dayId") REFERENCES "Day" ("id");

ALTER TABLE "Day_Partner" ADD FOREIGN KEY ("personId") REFERENCES "Person" ("id");

ALTER TABLE "Report" ADD FOREIGN KEY ("responseId") REFERENCES "Report_Response" ("id");

ALTER TABLE "Report_Response" ADD FOREIGN KEY ("itemId") REFERENCES "Report_Item" ("prompt");

ALTER TABLE "Report_Response" ADD FOREIGN KEY ("responseId") REFERENCES "Report_Item_Response" ("id");

ALTER TABLE "Objective_Notecard" ADD FOREIGN KEY ("objectiveId") REFERENCES "Objective" ("id");

ALTER TABLE "Objective_Notecard" ADD FOREIGN KEY ("notecardId") REFERENCES "Notecard" ("id");

ALTER TABLE "Notecard_Tag" ADD FOREIGN KEY ("notecardId") REFERENCES "Notecard" ("id");

ALTER TABLE "Notecard_Tag" ADD FOREIGN KEY ("tag") REFERENCES "Tag" ("tag");

ALTER TABLE "Objective_Tag" ADD FOREIGN KEY ("objectiveId") REFERENCES "Objective" ("id");

ALTER TABLE "Objective_Tag" ADD FOREIGN KEY ("tag") REFERENCES "Tag" ("tag");

ALTER TABLE "Notecard_Picture" ADD FOREIGN KEY ("notecardId") REFERENCES "Notecard" ("id");

ALTER TABLE "Notecard_Picture" ADD FOREIGN KEY ("pictureId") REFERENCES "Picture" ("id");

ALTER TABLE "Person_Picture" ADD FOREIGN KEY ("personId") REFERENCES "Person" ("id");

ALTER TABLE "Person_Picture" ADD FOREIGN KEY ("pictureId") REFERENCES "Picture" ("id");

ALTER TABLE "Person_Email" ADD FOREIGN KEY ("personId") REFERENCES "Person" ("id");

ALTER TABLE "Person_Email" ADD FOREIGN KEY ("email") REFERENCES "Email" ("email");
