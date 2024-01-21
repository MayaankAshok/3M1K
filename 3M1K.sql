


CREATE TABLE `User`(
    `Roll_number` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `Username` VARCHAR(255) NOT NULL,
    `Name` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL
);
CREATE TABLE `Messages`(
    `Message_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `User1_rn` BIGINT NOT NULL,
    `User2_rn` BIGINT NOT NULL,
    `Content` VARCHAR(255) NOT NULL,
    `Timestamp` Timestamp DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE `Courses`(
    `Course_id` INT  NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `Course_name` VARCHAR(255) NOT NULL
);

CREATE TABLE `POST`(
    `Post_id` INT  NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `User_rn` BIGINT NOT NULL,
    `Course_id` INT NOT NULL,
    `Status` VARCHAR(255) NOT NULL,
    `Content` VARCHAR(255) NOT NULL,
    `Timestamp` Timestamp DEFAULT CURRENT_TIMESTAMP

);

CREATE TABLE `USER_COURSES`(
    `Roll_number` BIGINT NOT NULL,
    `Course_id` INT  NOT NULL
);



ALTER TABLE
    `Messages` ADD CONSTRAINT `messages_user2_rn_foreign` FOREIGN KEY(`User2_rn`) REFERENCES `User`(`Roll_number`);
ALTER TABLE
    `POST` ADD CONSTRAINT `post_course_id_foreign` FOREIGN KEY(`Course_id`) REFERENCES `Courses`(`Course_id`);
ALTER TABLE
    `POST` ADD CONSTRAINT `post_user_rn_foreign` FOREIGN KEY(`User_rn`) REFERENCES `User`(`Roll_number`);
ALTER TABLE
    `Messages` ADD CONSTRAINT `messages_user1_rn_foreign` FOREIGN KEY(`User1_rn`) REFERENCES `User`(`Roll_number`);