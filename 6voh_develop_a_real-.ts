interface IUser {
  id: number;
  username: string;
  email: string;
  role: 'admin' | 'moderator' | 'user';
}

interface IWidget {
  id: number;
  type: 'chart' | 'table' | 'map';
  title: string;
  data: any; // chart data or table data or map data
}

interface IDashboard {
  id: number;
  title: string;
  description: string;
  widgets: IWidget[];
}

interface IRealtimeData {
  timestamp: number;
  data: {
    cpuUsage: number;
    memoryUsage: number;
    requestsPerSecond: number;
  };
}

interface IAlert {
  id: number;
  title: string;
  message: string;
  severity: 'low' | 'medium' | 'high';
  timestamp: number;
}

class RealtimeWebAppDashboard {
  private users: IUser[];
  private dashboards: IDashboard[];
  private alerts: IAlert[];
  private realtimeData: IRealtimeData;

  constructor() {
    this.users = [];
    this.dashboards = [];
    this.alerts = [];
    this.realtimeData = {
      timestamp: 0,
      data: {
        cpuUsage: 0,
        memoryUsage: 0,
        requestsPerSecond: 0,
      },
    };
  }

  addUser(user: IUser) {
    this.users.push(user);
  }

  addDashboard(dashboard: IDashboard) {
    this.dashboards.push(dashboard);
  }

  addAlert(alert: IAlert) {
    this.alerts.push(alert);
  }

  updateRealtimeData(data: IRealtimeData) {
    this.realtimeData = data;
  }

  getUser(id: number): IUser | undefined {
    return this.users.find((user) => user.id === id);
  }

  getDashboard(id: number): IDashboard | undefined {
    return this.dashboards.find((dashboard) => dashboard.id === id);
  }

  getAlerts(): IAlert[] {
    return this.alerts;
  }

  getRealtimeData(): IRealtimeData {
    return this.realtimeData;
  }
}