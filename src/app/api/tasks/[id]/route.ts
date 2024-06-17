import { TaskModel } from "@/models/task";
import { connectDb } from "@/utils/database";
import { connect } from "http2";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (_: NextRequest, { params }: {params: { id: string }} ) => {
    try {
        await connectDb();
        const task = await TaskModel.findById(params.id);

        if(!task) {
            return NextResponse.json(
                {message: 'タスクが存在しません'},
                { status: 404 }
            )
        }

        return NextResponse.json({ message: 'タスク取得成功', task })
    } catch (error) {
        return NextResponse.json({ message: 'タスク取得失敗' }, { status: 500 })
    }
};


export const dynamic = 'force-dynamic'; // リクエスト毎に実行されるようになる