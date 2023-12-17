/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { TUser } from "./user.interface";
import { User } from "./user.model";

const createUserIntoDB = async (payload: TUser)=> {
    const result = await User.create(payload);
    if(result.password){
       const {password,...filteredData}=result.toObject();
       return filteredData
    }
    return result
}

// const getAllCourseFromDB = async (query: TQueryObj): Promise<TCourse[] | any> => {
//     const filteredQuery = filter(Course.find(), query)
//     const searches = search(filteredQuery, query)
//     const sorted = sort(searches, query)
//     const paginated = pagination(sorted, query)
//     const field = SelectedField(paginated, query)
//     if (query?.level){
//         return await Course.find({'details.level':query.level })      
//     }
//     else if(query.provider){
//         return await Course.find({'provider':query.provider })  
//     }
//     else if(query.language){
//         return await Course.find({'language':query.language }) 
//     }
//     else if(query.durationInWeeks){
//         return await Course.find({'durationInWeeks':query.durationInWeeks })   
//     }
//     return field
// }
// const updateCourseIntoDB = async (id: string, payload: Partial<TCourse>) => {
//     const { tags, details, ...remainingCourse } = payload
//     const updatedModifiedData: Record<string, unknown> = {
//         ...remainingCourse

//     }
//     if (tags?.length) {
//         tags.forEach((tag) => {
//             for (const [key, value] of Object.entries(tag)) {
//                 updatedModifiedData[`tag.${key}`] = value
//             }
//         })
//     }
//     if (details && Object.keys(details).length) {
//         for (const [key, value] of Object.entries(details)) {
//             updatedModifiedData[`details.${key}`] = value
//         }
//     }

//     const result = await Course.findByIdAndUpdate(id, updatedModifiedData, { new: true, runValidators: true })
//     return result
// }
// const getCourseByReviewFromDB = async (id: string) => {
//     const session = await mongoose.startSession()
//     try {
//         session.startTransaction()

//         const course = await Course.findById(id).session(session)
//         if (!course) {
//             await session.abortTransaction()
//             session.endSession()
//             throw new Error('Course not Found')
//         }
//         const review = await Review.find({ courseId: id }).session(session)

//         await session.commitTransaction();
//         session.endSession()
//         return { course, review }

//     } catch (err: any) {
//         await session.abortTransaction()
//         session.endSession()
//         throw new Error(err)
//     }


// }
// const getBestCourseByReviewFromDB = async () => {
//     const aggregationR = await Review.aggregate([
//         {
//             $group: {
//                 _id: '$courseId',
//                 averageRating: { $avg: '$rating' },
//                 reviewCount: { $sum: 1 }
//             }
//         },
//         {
//             $sort: { averageRating: -1, reviewCount: -1 }
//         }, { $limit: 1 }
//     ])
//     const bestCourseID = aggregationR[0]._id
//     const bestCourse = await Course.findById(bestCourseID);

//     return {
//         course: bestCourse,
//         averageRating: aggregationR[0].averageRating,
//         reviewCount: aggregationR[0].reviewCount,
//     }
// }
export const userService = {
    createUserIntoDB,
//getAllCourseFromDB,
    //updateCourseIntoDB,
   // getCourseByReviewFromDB,
   // getBestCourseByReviewFromDB
}