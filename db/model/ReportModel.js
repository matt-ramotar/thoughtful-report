import mongoose from 'mongoose';
import ReportSchema from '../schema/ReportSchema.js';

export const ReportModel = mongoose.model('report', ReportSchema);
