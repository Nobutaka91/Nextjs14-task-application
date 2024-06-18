import { TaskDocument, TaskModel } from "@/models/task";
import { connectDb } from "@/utils/database"
import { NextResponse } from "next/server";

export const GET = async () => {
    const currentDate = new Date().toLocaleDateString('ja-JP', { // 現在時刻(YYYY-MM-DD)
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    }).replace(/\//g, '-')
    try {
        await connectDb(); // データベースとの接続
        const completedTasks: TaskDocument[] = await TaskModel.find({
            isCompleted: false,
            dueDate: {$lt: currentDate}, 
        }); // find()で全てのタスクを取得

        return NextResponse.json({ message: 'タスク取得成功', tasks: completedTasks});
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: 'タスク取得失敗'}, {status: 500})
    }
}

export const dynamic = 'force-dynamic';