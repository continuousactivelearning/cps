"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Users,
  BookOpen,
  TrendingUp,
  DollarSign,
  Activity,
  Clock,
  CheckCircle,
  AlertTriangle,
  Plus,
} from "lucide-react"
import Link from "next/link"

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Users",
      value: "2,847",
      change: "+12.5%",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Active Courses",
      value: "156",
      change: "+3 this week",
      icon: BookOpen,
      color: "text-green-600",
    },
    {
      title: "Revenue",
      value: "$45,231",
      change: "+8.2%",
      icon: DollarSign,
      color: "text-yellow-600",
    },
    {
      title: "Completion Rate",
      value: "73.4%",
      change: "+2.1%",
      icon: TrendingUp,
      color: "text-purple-600",
    },
  ]

  const recentActivity = [
    {
      action: "New course published",
      course: "Advanced React Patterns",
      time: "2 hours ago",
      status: "success",
    },
    {
      action: "User reported issue",
      course: "System Design Basics",
      time: "4 hours ago",
      status: "warning",
    },
    {
      action: "Course updated",
      course: "Data Structures & Algorithms",
      time: "6 hours ago",
      status: "info",
    },
    {
      action: "New user registered",
      course: "Premium subscription",
      time: "8 hours ago",
      status: "success",
    },
  ]

  const pendingTasks = [
    { task: "Review 5 new course submissions", priority: "high" },
    { task: "Update pricing for premium plans", priority: "medium" },
    { task: "Moderate user-generated content", priority: "high" },
    { task: "Backup database", priority: "low" },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-300">Manage your educational platform</p>
        </div>
        <div className="flex space-x-3">
          <Button asChild>
            <Link href="/admin/courses/new">
              <Plus className="w-4 h-4 mr-2" />
              New Course
            </Link>
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="w-5 h-5 mr-2" />
                Recent Activity
              </CardTitle>
              <CardDescription>Latest actions and updates on your platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        activity.status === "success"
                          ? "bg-green-500"
                          : activity.status === "warning"
                            ? "bg-yellow-500"
                            : "bg-blue-500"
                      }`}
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{activity.course}</p>
                    </div>
                    <span className="text-xs text-gray-500">{activity.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pending Tasks */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Pending Tasks
              </CardTitle>
              <CardDescription>Items requiring your attention</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {pendingTasks.map((task, index) => (
                  <div key={index} className="flex items-center space-x-3 p-2 rounded border">
                    <div className="flex-1">
                      <p className="text-sm">{task.task}</p>
                      <Badge
                        variant={
                          task.priority === "high"
                            ? "destructive"
                            : task.priority === "medium"
                              ? "default"
                              : "secondary"
                        }
                        className="text-xs mt-1"
                      >
                        {task.priority}
                      </Badge>
                    </div>
                    <Button size="sm" variant="ghost">
                      <CheckCircle className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <BookOpen className="w-8 h-8 mx-auto mb-2 text-blue-600" />
            <h3 className="font-semibold">Manage Courses</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Create and edit courses</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <Users className="w-8 h-8 mx-auto mb-2 text-green-600" />
            <h3 className="font-semibold">User Management</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Manage user accounts</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <TrendingUp className="w-8 h-8 mx-auto mb-2 text-purple-600" />
            <h3 className="font-semibold">Analytics</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">View detailed reports</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <AlertTriangle className="w-8 h-8 mx-auto mb-2 text-orange-600" />
            <h3 className="font-semibold">System Health</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Monitor system status</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
