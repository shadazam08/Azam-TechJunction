import React from "react";
import { Box, List, ListItem, Toolbar, Typography } from "@mui/material";
import { Helmet } from "react-helmet";
import DataTypesImage from "../../../Assets/image/DataTypes.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa1, fa2, fa3, fa4, faCircle } from "@fortawesome/free-solid-svg-icons";

const DataTypes = () => {
  return (
    <>
      <Helmet>
        <title>Data Types - Azam TechJunction</title>
      </Helmet>
      <Box component={"main"} className="changeWidth">
        <Toolbar />
        <Box sx={{ p: 3 }}>
          <Typography variant={"h4"} className="text-gray-500">
            {`Data Types`}
          </Typography>
          <Typography align="justify" mt={2}>
            {`PostgreSQL offers a rich set of data types to support various data needs, from simple numbers and text to complex geometric and binary
            data. Below is an overview of the most commonly used PostgreSQL data types:`}
          </Typography>
          <Typography align="justify" mt={2}>
            {` PostgreSQL provides a variety of data types. Let's explore them one by one:`}
          </Typography>
          <List>
            <ListItem>
              <Typography component={"span"} align={"justify"} mt={1}>
                <img src={DataTypesImage} className="h-full object-cover" style={{ width: "100%" }} alt="Data Types" />
              </Typography>
            </ListItem>
          </List>
          <Typography align="justify" mt={2} sx={{ fontSize: "2em", fontWeight: "bold" }}>
            {`Numeric`}
          </Typography>
          <Typography align="justify" mt={2}>
            {` The `} <code className="codes">numeric</code>{" "}
            {`type in PostgreSQL is a variable-precision numeric data type, also known as arbitrary precision or decimal. It is suitable for storing numbers where precision is required, such as financial data or scientific measurements, and supports a much larger range of values compared to other numeric types like `}{" "}
            <code className="codes">float</code> {`or`} <code className="codes">double</code>
          </Typography>
          <List>
            <ListItem>
              <Typography component={"span"} align={"justify"}>
                <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold" }}>
                  <FontAwesomeIcon icon={fa1} />
                  {")"} {`Integer`}
                </Typography>
                <List>
                  <ListItem>
                    <Typography component={"span"} align={"justify"}>
                      <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold" }}>
                        <FontAwesomeIcon icon={faCircle} size="2xs" style={{ color: "#4A148C" }} /> {`SMALLINT`}:
                      </Typography>{" "}
                      {`2 bytes, range from -32,768 to 32,767.`}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography component={"span"} align={"justify"}>
                      <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold" }}>
                        <FontAwesomeIcon icon={faCircle} size="2xs" style={{ color: "#4A148C" }} /> {`INTEGER (or INT):`}
                      </Typography>{" "}
                      {`4 bytes, range from -2,147,483,648 to 2,147,483,647.`}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography component={"span"} align={"justify"}>
                      <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold" }}>
                        <FontAwesomeIcon icon={faCircle} size="2xs" style={{ color: "#4A148C" }} /> {`BIGINT`}:
                      </Typography>{" "}
                      {`8 bytes, range from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807.`}
                    </Typography>
                  </ListItem>
                </List>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align={"justify"}>
                <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold" }}>
                  <FontAwesomeIcon icon={fa2} />
                  {")"} {`Serial`}
                </Typography>
                <List>
                  <ListItem>
                    <Typography component={"span"} align={"justify"}>
                      <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold" }}>
                        <FontAwesomeIcon icon={faCircle} size="2xs" style={{ color: "#4A148C" }} /> {`SMALLSERIAL`}:
                      </Typography>{" "}
                      {`2 bytes, auto-incrementing integer, range from 1 to 32,767.`}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography component={"span"} align={"justify"}>
                      <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold" }}>
                        <FontAwesomeIcon icon={faCircle} size="2xs" style={{ color: "#4A148C" }} /> {`SERIAL`}:
                      </Typography>{" "}
                      {`4 bytes, auto-incrementing integer, range from 1 to 2,147,483,647.`}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography component={"span"} align={"justify"}>
                      <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold" }}>
                        <FontAwesomeIcon icon={faCircle} size="2xs" style={{ color: "#4A148C" }} /> {`BIGSERIAL`}:
                      </Typography>{" "}
                      {`8 bytes, auto-incrementing integer, range from 1 to 9,223,372,036,854,775,807.`}
                    </Typography>
                  </ListItem>
                </List>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align={"justify"}>
                <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold" }}>
                  <FontAwesomeIcon icon={fa3} />
                  {")"} {`Floating-Point`}
                </Typography>
                <List>
                  <ListItem>
                    <Typography component={"span"} align={"justify"}>
                      <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold" }}>
                        <FontAwesomeIcon icon={faCircle} size="2xs" style={{ color: "#4A148C" }} /> {`REAL`}:
                      </Typography>{" "}
                      {`4 bytes, variable-precision floating-point number.`}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography component={"span"} align={"justify"}>
                      <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold" }}>
                        <FontAwesomeIcon icon={faCircle} size="2xs" style={{ color: "#4A148C" }} /> {`DOUBLE PRECISION:`}
                      </Typography>{" "}
                      {`8 bytes, variable-precision floating-point number.`}
                    </Typography>
                  </ListItem>
                </List>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align={"justify"}>
                <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold" }}>
                  <FontAwesomeIcon icon={fa4} />
                  {")"} {`Fixed-Precision`}
                </Typography>
                <List>
                  <ListItem>
                    <Typography component={"span"} align={"justify"}>
                      <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold" }}>
                        <FontAwesomeIcon icon={faCircle} size="2xs" style={{ color: "#4A148C" }} /> {`NUMERIC (or DECIMAL)`}:
                      </Typography>{" "}
                      {`Variable storage, user-defined precision and scale, exact.`}
                    </Typography>
                  </ListItem>
                </List>
              </Typography>
            </ListItem>
          </List>
          <Typography align="justify" mt={2} sx={{ fontSize: "2em", fontWeight: "bold" }}>
            Monetary
          </Typography>
          <Typography align="justify" mt={2}>
            {`In PostgreSQL, the `}
            <code className="codes">money</code> {`type is used to store monetary values. It is similar to the `}
            <code className="codes">numeric</code>{" "}
            {`type but has specific formatting and rounding behavior suitable for representing currency amounts. `}
          </Typography>
          <List>
            <ListItem>
              <Typography component={"span"} align={"justify"}>
                <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold" }}>
                  <FontAwesomeIcon icon={faCircle} size="2xs" style={{ color: "#4A148C" }} /> {`MONEY`}:
                </Typography>{" "}
                {`8 bytes, currency amount with fixed fractional precision.`}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align={"justify"}>
                <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold", fontSize: "1.3em" }}>
                  {`Advantages`}
                </Typography>{" "}
                <List>
                  <ListItem>
                    <Typography component={"span"} align={"justify"}>
                      <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold" }}>
                        <FontAwesomeIcon icon={faCircle} size="2xs" style={{ color: "#4A148C" }} />
                      </Typography>{" "}
                      {`Convenient for applications that require currency representation with consistent formatting.`}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography component={"span"} align={"justify"}>
                      <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold" }}>
                        <FontAwesomeIcon icon={faCircle} size="2xs" style={{ color: "#4A148C" }} />
                      </Typography>{" "}
                      {`Automatically handles locale-specific formatting, which can be useful for applications with international users.`}
                    </Typography>
                  </ListItem>
                </List>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align={"justify"}>
                <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold", fontSize: "1.3em" }}>
                  {`Disadvantages`}
                </Typography>{" "}
                <List>
                  <ListItem>
                    <Typography component={"span"} align={"justify"}>
                      <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold" }}>
                        <FontAwesomeIcon icon={faCircle} size="2xs" style={{ color: "#4A148C" }} />
                      </Typography>{" "}
                      {`Less flexible than the <code className="codes">NUMERIC</code> type in terms of precision and scale.`}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography component={"span"} align={"justify"}>
                      <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold" }}>
                        <FontAwesomeIcon icon={faCircle} size="2xs" style={{ color: "#4A148C" }} />
                      </Typography>{" "}
                      {`Locale dependence can be a downside if consistent formatting across different environments is required.`}
                    </Typography>
                  </ListItem>
                </List>
              </Typography>
            </ListItem>
          </List>
          <Typography align="justify" mt={2} sx={{ fontSize: "2em", fontWeight: "bold" }}>
            {`Character`}
          </Typography>
          <Typography align="justify" mt={2}>
            {`PostgreSQL provides several character types for storing text data. Each type has its specific use case, storage requirements, and performance characteristics. Here’s a detailed look at the character types available in PostgreSQL:`}
          </Typography>
          <List>
            <ListItem>
              <Typography component={"span"} align={"justify"}>
                <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold" }}>
                  <FontAwesomeIcon icon={fa1} />
                  {")"} {`Fixed Length`}
                </Typography>
                <List>
                  <ListItem>
                    <Typography component={"span"} align={"justify"}>
                      <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold" }}>
                        <FontAwesomeIcon icon={faCircle} size="2xs" style={{ color: "#4A148C" }} /> {`CHAR(n) (or CHARACTER(n)):`}
                      </Typography>{" "}
                      {`Fixed-length character string.`}
                    </Typography>
                  </ListItem>
                </List>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align={"justify"}>
                <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold" }}>
                  <FontAwesomeIcon icon={fa2} />
                  {")"} {`Variable Length`}
                </Typography>
                <List>
                  <ListItem>
                    <Typography component={"span"} align={"justify"}>
                      <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold" }}>
                        <FontAwesomeIcon icon={faCircle} size="2xs" style={{ color: "#4A148C" }} /> {`VARCHAR(n) (or CHARACTER VARYING(n)):`}
                      </Typography>{" "}
                      {`Variable-length character string with a limit.`}
                    </Typography>
                  </ListItem>
                </List>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align={"justify"}>
                <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold" }}>
                  <FontAwesomeIcon icon={fa3} />
                  {")"} {`Unlimited Length`}
                </Typography>
                <List>
                  <ListItem>
                    <Typography component={"span"} align={"justify"}>
                      <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold" }}>
                        <FontAwesomeIcon icon={faCircle} size="2xs" style={{ color: "#4A148C" }} /> {`TEXT`}:
                      </Typography>{" "}
                      {`Variable-length character string with unlimited length.`}
                    </Typography>
                  </ListItem>
                </List>
              </Typography>
            </ListItem>
          </List>
          <Typography align="justify" mt={2} sx={{ fontSize: "2em", fontWeight: "bold" }}>
            {`Binary Data`}
          </Typography>
          <Typography align="justify" mt={2}>
            {`PostgreSQL provides several data types for storing binary data. These types are useful for handling data that is not necessarily text-based, such as images, audio files, or any arbitrary binary data.`}
          </Typography>
          <List>
            <ListItem>
              <Typography component={"span"} align={"justify"}>
                <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold" }}>
                  <FontAwesomeIcon icon={faCircle} size="2xs" style={{ color: "#4A148C" }} /> {`BYTEA`}:
                </Typography>{" "}
                {`Variable-length binary string.`}
              </Typography>
            </ListItem>
          </List>
          <Typography align="justify" mt={2} sx={{ fontSize: "2em", fontWeight: "bold" }}>
            {`Date/Time`}
          </Typography>
          <Typography align="justify" mt={2}>
            {`PostgreSQL offers a comprehensive set of date/time data types to handle various aspects of temporal data. These data types allow you to store dates, times, time zones, and intervals accurately.`}
          </Typography>
          <List>
            <ListItem>
              <Typography component={"span"} align={"justify"}>
                <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold" }}>
                  <FontAwesomeIcon icon={fa1} />
                  {")"} {`Date and Time:`}
                </Typography>
                <List>
                  <ListItem>
                    <Typography component={"span"} align={"justify"}>
                      <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold" }}>
                        <FontAwesomeIcon icon={faCircle} size="2xs" style={{ color: "#4A148C" }} /> {`DATE`}:
                      </Typography>{" "}
                      {`4 bytes, date (year, month, day).`}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography component={"span"} align={"justify"}>
                      <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold" }}>
                        <FontAwesomeIcon icon={faCircle} size="2xs" style={{ color: "#4A148C" }} />{" "}
                        {`TIME [ (p) ] [ WITHOUT TIME ZONE ] / TIME [ (p) ] WITH TIME ZONE:`}
                      </Typography>{" "}
                      {`8 bytes, time of day (no date) with optional time zone.`}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography component={"span"} align={"justify"}>
                      <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold" }}>
                        <FontAwesomeIcon icon={faCircle} size="2xs" style={{ color: "#4A148C" }} />{" "}
                        {`TIMESTAMP [ (p) ] [ WITHOUT TIME ZONE ] /
                        TIMESTAMP [ (p) ] WITH TIME ZONE:`}
                      </Typography>{" "}
                      {`8 bytes, date and time with optional time zone.`}
                    </Typography>
                  </ListItem>
                </List>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align={"justify"}>
                <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold" }}>
                  <FontAwesomeIcon icon={fa2} />
                  {")"} {`Intervals:`}
                </Typography>
                <List>
                  <ListItem>
                    <Typography component={"span"} align={"justify"}>
                      <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold" }}>
                        <FontAwesomeIcon icon={faCircle} size="2xs" style={{ color: "#4A148C" }} /> {`INTERVAL`}:
                      </Typography>{" "}
                      {`Variable storage, time span.`}
                    </Typography>
                  </ListItem>
                </List>
              </Typography>
            </ListItem>
          </List>
          <Typography align="justify" mt={2} sx={{ fontSize: "2em", fontWeight: "bold" }}>
            {`Boolean`}
          </Typography>
          <Typography align="justify" mt={2}>
            {`In PostgreSQL, the `}
            <code className="codes">BOOLEAN</code>{" "}
            {`type is used to store logical Boolean values, which can represent true or false states. Here's a detailed look at the `}
            <code className="codes">BOOLEAN</code> {`type in PostgreSQL:`}
          </Typography>
          <List>
            <ListItem>
              <Typography component={"span"} align={"justify"}>
                <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold" }}>
                  <FontAwesomeIcon icon={faCircle} size="2xs" style={{ color: "#4A148C" }} /> {`BOOLEAN`}:
                </Typography>{" "}
                {`1 byte, state value true, false, or unknown.`}
              </Typography>
            </ListItem>
          </List>
          <Typography align="justify" mt={2} sx={{ fontSize: "2em", fontWeight: "bold" }}>
            {`Enumerated`}
          </Typography>
          <Typography align="justify" mt={2}>
            {`In PostgreSQL, the Enumerated (ENUM) type is used to define a static, ordered set of values. This is particularly useful for columns that should only allow a specific set of values, such as days of the week, status codes, or categorical labels.`}
          </Typography>
          <List>
            <ListItem>
              <Typography component={"span"} align={"justify"}>
                <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold" }}>
                  <FontAwesomeIcon icon={faCircle} size="2xs" style={{ color: "#4A148C" }} /> {`ENUM`}:
                </Typography>{" "}
                {`User-defined type consisting of a static, ordered set of values.`}
              </Typography>
            </ListItem>
          </List>
          <Typography align="justify" mt={2} sx={{ fontSize: "2em", fontWeight: "bold" }}>
            {`Geometric`}
          </Typography>
          <Typography align="justify" mt={2}>
            {`PostgreSQL provides a rich set of geometric data types to handle two-dimensional spatial data. These types are useful for applications that require geometric calculations, such as GIS (Geographic Information Systems), CAD (Computer-Aided Design), or any spatial data processing.`}
          </Typography>
          <List>
            <ListItem>
              <Typography component={"span"} align={"justify"}>
                <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold" }}>
                  <FontAwesomeIcon icon={faCircle} size="2xs" style={{ color: "#4A148C" }} /> {`POINT`}:
                </Typography>{" "}
                {`16 bytes, a point in a plane.`}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align={"justify"}>
                <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold" }}>
                  <FontAwesomeIcon icon={faCircle} size="2xs" style={{ color: "#4A148C" }} /> {`LINE`}:
                </Typography>{" "}
                {`No fixed size, infinite line in a plane.`}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align={"justify"}>
                <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold" }}>
                  <FontAwesomeIcon icon={faCircle} size="2xs" style={{ color: "#4A148C" }} /> {`LSEG`}:
                </Typography>{" "}
                {`32 bytes, a line segment in a plane.`}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align={"justify"}>
                <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold" }}>
                  <FontAwesomeIcon icon={faCircle} size="2xs" style={{ color: "#4A148C" }} /> {`BOX`}:
                </Typography>{" "}
                {`32 bytes, a rectangular box.`}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align={"justify"}>
                <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold" }}>
                  <FontAwesomeIcon icon={faCircle} size="2xs" style={{ color: "#4A148C" }} /> {`POLYGON`}:
                </Typography>{" "}
                {`No fixed size, a closed geometric shape.`}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align={"justify"}>
                <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold" }}>
                  <FontAwesomeIcon icon={faCircle} size="2xs" style={{ color: "#4A148C" }} /> {`PATH`}:
                </Typography>{" "}
                {`No fixed size, a closed path (similar to polygon).`}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align={"justify"}>
                <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold" }}>
                  <FontAwesomeIcon icon={faCircle} size="2xs" style={{ color: "#4A148C" }} /> {`CIRCLE`}:
                </Typography>{" "}
                {`24 bytes, a circle.`}
              </Typography>
            </ListItem>
          </List>
          <Typography align="justify" mt={2} sx={{ fontSize: "2em", fontWeight: "bold" }}>
            {`Network Address`}
          </Typography>
          <Typography align="justify" mt={2}>
            {`PostgreSQL provides specialized data types to handle network addresses. These types are useful for storing IP addresses, network subnets, and MAC addresses, and they come with a range of functions and operators for network address manipulation and comparison.`}
          </Typography>
          <List>
            <ListItem>
              <Typography component={"span"} align={"justify"}>
                <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold" }}>
                  <FontAwesomeIcon icon={faCircle} size="2xs" style={{ color: "#4A148C" }} /> {`CIDR`}:
                </Typography>{" "}
                {`IPv4 or IPv6 network address.`}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align={"justify"}>
                <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold" }}>
                  <FontAwesomeIcon icon={faCircle} size="2xs" style={{ color: "#4A148C" }} /> {`INET`}:
                </Typography>{" "}
                {`IPv4 or IPv6 host address.`}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align={"justify"}>
                <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold" }}>
                  <FontAwesomeIcon icon={faCircle} size="2xs" style={{ color: "#4A148C" }} /> {`MACADDR`}:
                </Typography>{" "}
                {`MAC address.`}
              </Typography>
            </ListItem>
          </List>
          <Typography align="justify" mt={2} sx={{ fontSize: "2em", fontWeight: "bold" }}>
            {`Bit String`}
          </Typography>
          <Typography align="justify" mt={2}>
            {`PostgreSQL provides bit string types for storing and manipulating bit-level data. These types are useful for applications that require efficient storage and manipulation of binary data, such as flags, bit masks, or binary protocols. PostgreSQL supports two types of bit strings: `}
            <code className="codes">bit</code> {`and`} <code className="codes">bit varying</code> {`.`}
          </Typography>
          <List>
            <ListItem>
              <Typography component={"span"} align={"justify"}>
                <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold" }}>
                  <FontAwesomeIcon icon={faCircle} size="2xs" style={{ color: "#4A148C" }} /> {`BIT [ (n) ]:`}:
                </Typography>{" "}
                {`Fixed-length bit string.`}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align={"justify"}>
                <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold" }}>
                  <FontAwesomeIcon icon={faCircle} size="2xs" style={{ color: "#4A148C" }} /> {`BIT VARYING [ (n) ]`}:
                </Typography>{" "}
                {`Variable-length bit string.`}
              </Typography>
            </ListItem>
          </List>
          <Typography align="justify" mt={2} sx={{ fontSize: "2em", fontWeight: "bold" }}>
            {`Text Search`}
          </Typography>
          <Typography align="justify" mt={2}>
            {`PostgreSQL provides powerful text search capabilities that allow for efficient and flexible searching of textual data. This is particularly useful for applications such as search engines, document repositories, and any system that requires full-text search capabilities. The primary text search types in PostgreSQL are `}{" "}
            <code className="codes">tsvector</code> {`and`} <code className="codes">tsquery</code>
            {`.`}
          </Typography>
          <List>
            <ListItem>
              <Typography component={"span"} align={"justify"}>
                <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold" }}>
                  <FontAwesomeIcon icon={faCircle} size="2xs" style={{ color: "#4A148C" }} /> {`TSVECTOR`}:
                </Typography>{" "}
                {`Represents a document in a form optimized for text search. It stores lexemes (normalized words) along with positional information.`}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align={"justify"}>
                <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold" }}>
                  <FontAwesomeIcon icon={faCircle} size="2xs" style={{ color: "#4A148C" }} /> {`TSQUERY`}:
                </Typography>{" "}
                {`Represents a text query for searching `}
                <code className="codes">tsvector</code> {`documents. It can include logical operators like `}
                <code className="codes">AND</code>, <code className="codes">OR</code>, {`and`} <code className="codes">NOT</code>
                {`.`}
              </Typography>
            </ListItem>
          </List>
          <Typography align="justify" mt={2} sx={{ fontSize: "2em", fontWeight: "bold" }}>
            {`UUID`}
          </Typography>
          <Typography align="justify" mt={2}>
            {`PostgreSQL provides a native data type called `} <code className="codes">UUID</code>{" "}
            {`(Universally Unique Identifier) for storing globally unique identifiers. UUIDs are 128-bit numbers used to uniquely identify information in distributed systems. PostgreSQL's `}{" "}
            <code className="codes">UUID</code> {` type complies with the standard UUID format defined in RFC 4122.`}
          </Typography>
          <List>
            <ListItem>
              <Typography component={"span"} align={"justify"}>
                <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold" }}>
                  <FontAwesomeIcon icon={faCircle} size="2xs" style={{ color: "#4A148C" }} /> {`UUID`}:
                </Typography>{" "}
                {`16 bytes, universally unique identifier.`}
              </Typography>
            </ListItem>
          </List>
          <Typography align="justify" mt={2} sx={{ fontSize: "2em", fontWeight: "bold" }}>
            {`JSON`}
          </Typography>
          <Typography align="justify" mt={2}>
            {`PostgreSQL provides powerful support for JSON (JavaScript Object Notation) data types, allowing you to store, query, and manipulate JSON data efficiently. The two primary JSON data types in PostgreSQL are `}{" "}
            <code className="codes">json</code> {`and`} <code className="codes">jsonb</code>
          </Typography>
          <List>
            <ListItem>
              <Typography component={"span"} align={"justify"}>
                <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold" }}>
                  <FontAwesomeIcon icon={faCircle} size="2xs" style={{ color: "#4A148C" }} /> {`JSON`}:
                </Typography>{" "}
                {`Stores JSON data as plain text. It is validated to ensure it is well-formed JSON, but it is not parsed or indexed in any special way.`}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align={"justify"}>
                <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold" }}>
                  <FontAwesomeIcon icon={faCircle} size="2xs" style={{ color: "#4A148C" }} /> {`JSONB`}:
                </Typography>{" "}
                {`Stores JSON data in a binary format. This format is more efficient for indexing and querying, as it allows for faster access and manipulation.`}
              </Typography>
            </ListItem>
          </List>
          <Typography align="justify" mt={2} sx={{ fontSize: "2em", fontWeight: "bold" }}>
            {`XML`}
          </Typography>
          <Typography align="justify" mt={2}>
            {`PostgreSQL offers support for XML data through the `} <code className="codes">xml</code>{" "}
            {`data type, allowing storage and manipulation of XML documents directly within the database. This feature is particularly useful for applications that deal with XML data, such as web services, document management systems, and data interchange formats.`}
          </Typography>
          <List>
            <ListItem>
              <Typography component={"span"} align={"justify"}>
                <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold" }}>
                  <FontAwesomeIcon icon={faCircle} size="2xs" style={{ color: "#4A148C" }} /> {`XML`}:
                </Typography>{" "}
                {` Variable-length XML data.`}
              </Typography>
            </ListItem>
          </List>
          <Typography align="justify" mt={2} sx={{ fontSize: "2em", fontWeight: "bold" }}>
            {`Arrays`}
          </Typography>
          <Typography align="justify" mt={2}>
            {`PostgreSQL supports array data types, allowing you to store arrays of values within a single database column. Arrays are useful for scenarios where you need to store multiple values of the same data type together, such as a list of tags, phone numbers, or related data points.`}
          </Typography>
          <Typography align="justify" mt={2} sx={{ fontSize: "2em", fontWeight: "bold" }}>
            {`Composite`}
          </Typography>
          <Typography align="justify" mt={2}>
            {`Composite types in PostgreSQL allow you to define custom data types composed of multiple fields. These types can be useful for modeling complex data structures or defining reusable structures within the database schema.`}
          </Typography>
          <List>
            <ListItem>
              <Typography component={"span"} align={"justify"}>
                <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold" }}>
                  <FontAwesomeIcon icon={faCircle} size="2xs" style={{ color: "#4A148C" }} /> {`XML`}:
                </Typography>{" "}
                {` Variable-length XML data.`}
              </Typography>
            </ListItem>
          </List>
          <Typography align="justify" mt={2} sx={{ fontSize: "2em", fontWeight: "bold" }}>
            {`Range`}
          </Typography>
          <Typography align="justify" mt={2}>
            {`Range types in PostgreSQL allow you to store a range of values of a particular data type. PostgreSQL provides built-in range types for various data types such as integers, timestamps, and dates. Range types are useful for representing continuous or discrete ranges of values, such as time intervals, numeric ranges, and date ranges.`}
          </Typography>
          <List>
            <ListItem>
              <Typography component={"span"} align={"justify"}>
                <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold" }}>
                  <FontAwesomeIcon icon={faCircle} size="2xs" style={{ color: "#4A148C" }} /> {`INT4RANGE`}:
                </Typography>{" "}
                {` Range of integer.`}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align={"justify"}>
                <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold" }}>
                  <FontAwesomeIcon icon={faCircle} size="2xs" style={{ color: "#4A148C" }} /> {`INT8RANGE`}:
                </Typography>{" "}
                {` Range of bigint.`}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align={"justify"}>
                <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold" }}>
                  <FontAwesomeIcon icon={faCircle} size="2xs" style={{ color: "#4A148C" }} /> {`NUMRANGE`}:
                </Typography>{" "}
                {` Range of numeric.`}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align={"justify"}>
                <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold" }}>
                  <FontAwesomeIcon icon={faCircle} size="2xs" style={{ color: "#4A148C" }} /> {`TSRANGE`}:
                </Typography>{" "}
                {` Range of timestamp without time zone.`}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align={"justify"}>
                <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold" }}>
                  <FontAwesomeIcon icon={faCircle} size="2xs" style={{ color: "#4A148C" }} /> {`TSTZRANGE`}:
                </Typography>{" "}
                {` Range of timestamp with time zone.`}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component={"span"} align={"justify"}>
                <Typography component={"span"} align={"justify"} sx={{ fontWeight: "bold" }}>
                  <FontAwesomeIcon icon={faCircle} size="2xs" style={{ color: "#4A148C" }} /> {`DATERANGE`}:
                </Typography>{" "}
                {`Range of date.`}
              </Typography>
            </ListItem>
          </List>
          <Typography align="justify" mt={2}>
            {`Each data type is suited for specific use cases, offering a robust set of tools for efficient and effective database management. PostgreSQL’s extensive data type system allows for precise control over data storage, retrieval, and manipulation.`}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default DataTypes;
