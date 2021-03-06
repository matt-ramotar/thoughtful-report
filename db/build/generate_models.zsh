npx sequelize-cli model:generate --name Objective --attributes description:text
npx sequelize-cli model:generate --name Report_Item_Type --attributes type:text
npx sequelize-cli model:generate --name Report_Prompt_Type --attributes isAskingAboutWho:text,isAskingAboutWhat:text
npx sequelize-cli model:generate --name Report_Item --attributes prompt:text,promptTypeId:integer,itemTypeId:integer
npx sequelize-cli model:generate --name Report_Item_Response --attributes textVal:text,numVal:integer
npx sequelize-cli model:generate --name Report_Response --attributes itemId:integer,responseId:integer
npx sequelize-cli model:generate --name Report --attributes responseId:integer
npx sequelize-cli model:generate --name Day --attributes date:date,reportId:integer
npx sequelize-cli model:generate --name Day_Objective --attributes dayId:integer,objectiveId:integer
