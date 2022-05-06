import React from 'react';
import { Table } from 'react-bootstrap';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container mt-5'>
            <PageTitle title="Blogs"></PageTitle>
            <div  >
                <h3 className='text-center text-primary'>Difference between Javascript and NodeJS ?</h3>
                <Table striped bordered hover >
                    <thead>
                        <tr>
                            <th className='text-center'>JavaScript</th>
                            <th className='text-center'>Node Js</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                1. Javascript is a programming language that is used for writing scripts on the website.</td>
                            <td>1. NodeJS is a Javascript runtime environment.</td>
                        </tr>
                        <tr>
                            <td>2. Javascript can only be run in the browsers.</td>
                            <td>2. We can run Javascript outside the browser with the help of NodeJS.</td>
                        </tr>
                        <tr>
                            <td>3. It is basically used on the client-side.</td>
                            <td>3. It is mostly used on the server-side.</td>
                        </tr>
                        <tr>
                            <td>4. Javascript is used in frontend development.</td>
                            <td>4. Nodejs is used in server-side development.</td>
                        </tr>
                        <tr>
                            <td>5. Some of the javascript frameworks are RamdaJS, TypedJS, etc. </td>
                            <td>5. Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm. </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div className='mt-5'>
                <h3 className='text-center text-primary'>Difference between  SQL and NoSQL ?</h3>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th className='text-center'>SQL</th>
                            <th className='text-center'>NoSQL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                1. RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS). </td>
                            <td>1. Non-relational or distributed database system.</td>
                        </tr>
                        <tr>
                            <td>2. These databases have fixed or static or predefined schema.</td>
                            <td>2. They have dynamic schema.</td>
                        </tr>
                        <tr>
                            <td>3. These databases are not suited for hierarchical data storage.</td>
                            <td>3. These databases are best suited for hierarchical data storage.</td>
                        </tr>
                        <tr>
                            <td>4. These databases are best suited for complex queries.</td>
                            <td>4. These databases are not so good for complex queries.</td>
                        </tr>
                        <tr>
                            <td>5. Vertically Scalable. </td>
                            <td>5. Horizontally scalable. </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div className='mt-5'>
                <h3 className='text-center text-primary'>When we should use NodeJS and MongoDB ?</h3>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th className='text-center'>Uses of NodeJS</th>
                            <th className='text-center'>Uses of MongoDB</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <ul>
                                    <li>When we need to Data Sreaming</li>
                                    <li>When we do a collaborative programme or several process at the same time.</li>
                                    <li>When we do a Hardware Programming task.</li>
                                    <li>When we work with V8 engine NodeJS is badly needed.</li>
                                    <li>When we need to develop non-blocking I/O calls model</li>
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    <li>When we need to integrate large amounts of diverse data</li>
                                    <li>When we need for describing complex data structures that evolve.</li>
                                    <li>When we need to deliver data in high-performance applications</li>
                                    <li>When we have been supporting hybrid and multi-cloud applications</li>
                                    <li>When we have been supporting agile development and collaboration</li>
                                </ul>
                            </td>
                        </tr>

                    </tbody>
                </Table>
            </div>
            <div className='mt-5 mb-5'>
                <h3 className='text-center text-primary'>What is the purpose of JWT and How does it work ?</h3>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th className='text-center'>Purpose of JWT</th>
                            <th className='text-center'>How Does It Work</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                WT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                            </td>
                            <td>
                                Once decoded, you will get two JSON strings: <br />

                                1.The header <br />
                                2.The payload. <br />
                                3.The signature. <br />
                                The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.

                                The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.

                                There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others.

                                The signature ensures that the token hasn't been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.
                            </td>
                        </tr>

                    </tbody>
                </Table>
            </div>
        </div >
    );
};

export default Blogs;