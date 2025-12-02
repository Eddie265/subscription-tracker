import {Router} from "express";
import authorize from "../middlewares/auth.middleware.js";
import {createSubscription, getUserSubscriptions} from "../controllers/subscription.controller.js";

const subscriptionRoutes = Router();

subscriptionRoutes.get('/', (req, res) => res.send({title: 'GET all subscriptions'}));

subscriptionRoutes.get('/:id', (req, res) => res.send({title: 'GET subscription details'}));

subscriptionRoutes.post('/' , authorize,createSubscription);

subscriptionRoutes.put('/:id', (req, res) => res.send({title: 'UPDATE subscription'}));

subscriptionRoutes.delete('/:id', (req, res) => res.send({title: 'DELETE subscription'}));

subscriptionRoutes.get('/user/:id', authorize,getUserSubscriptions);

subscriptionRoutes.get('/:id/cancel', (req, res) => res.send({title: 'CANCEL subscription'}));

subscriptionRoutes.get('/upcoming-renewals', (req, res) => res.send({title: 'GET upcoming renewals'}));

export default subscriptionRoutes;