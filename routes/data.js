import express from 'express';
import config from '../config.js';

const router = express.Router();

router.get('/getData', function(req, res, next) {
  // GET/data/ route
  res.send([
 {
   "Longitude": -120.099604,
   "Latitude": 42.34753
 },
 {
   "Longitude": -102.768455,
   "Latitude": 47.212739
 },
 {
   "Longitude": -102.292913,
   "Latitude": 47.096861
 },
 {
   "Longitude": -74.270072,
   "Latitude": 42.050319
 },
 {
   "Longitude": -74.348368,
   "Latitude": 41.909779
 },
 {
   "Longitude": -74.010731,
   "Latitude": 41.766009
 },
 {
   "Longitude": -74.18081,
   "Latitude": 41.929913
 },
 {
   "Longitude": -103.105268,
   "Latitude": 46.629922
 },
 
 {
   "Longitude": -74.922858,
   "Latitude": 41.786432
 },
 
 {
   "Longitude": -74.647385,
   "Latitude": 41.727053
 },
 {
   "Longitude": -73.934281,
   "Latitude": 42.114632
 },
 {
   "Longitude": -94.173683,
   "Latitude": 34.233886
 },
 
 {
   "Longitude": -101.070804,
   "Latitude": 46.195722
 },
 
 {
   "Longitude": -74.076456,
   "Latitude": 41.987076
 },
 
 {
   "Longitude": -73.988683,
   "Latitude": 41.893381
 },
 {
   "Longitude": -74.494653,
   "Latitude": 42.11888
 },
 {
   "Longitude": -99.8416,
   "Latitude": 48.371047
 },
 {
   "Longitude": -100.625068,
   "Latitude": 48.429247
 },
 
 {
   "Longitude": -99.720428,
   "Latitude": 48.718397
 },
 {
   "Longitude": -100.102826,
   "Latitude": 48.544789
 },
 
 {
   "Longitude": -74.307595,
   "Latitude": 42.018452
 },
 
 {
   "Longitude": -73.943372,
   "Latitude": 42.080308
 },
 {
   "Longitude": -103.737916,
   "Latitude": 35.822876
 }
]);
});

export default router;
